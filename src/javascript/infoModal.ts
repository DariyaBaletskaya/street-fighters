import View from "./view";

class InfoModal extends View {
  fighterDetails: any;
  modal: HTMLElement;
  nameField: HTMLInputElement;
  healthField: HTMLInputElement;
  defenseField: HTMLInputElement;
  attackField: HTMLInputElement;
  saveButton: HTMLButtonElement;
  closeButton: HTMLButtonElement;

  constructor(fighterDetails: any) {
    super();
    this.fighterDetails = fighterDetails;
    this.modal = document.getElementById("fighterInfo") as HTMLDivElement;
    this.nameField = document.getElementById(
      "fighter-name"
    ) as HTMLInputElement;
    this.healthField = document.getElementById(
      "fighter-health"
    ) as HTMLInputElement;
    this.defenseField = document.getElementById(
      "fighter-defense"
    ) as HTMLInputElement;
    this.attackField = document.getElementById(
      "fighter-attack"
    ) as HTMLInputElement;
    this.saveButton = document.getElementById("save-btn") as HTMLButtonElement;
    this.closeButton = document.getElementById(
      "close-btn"
    ) as HTMLButtonElement;
  }

  handleFighterInfoModal(): any {
    this.showElement(this.modal);

    this._setValue(this.nameField, this.fighterDetails.name);
    this._setValue(this.healthField, this.fighterDetails.health);
    this._setValue(this.defenseField, this.fighterDetails.defense);
    this._setValue(this.attackField, this.fighterDetails.attack);

    this._setSaveBtn(this.saveButton);
    this._setCloseBtn(this.closeButton);
    return this.fighterDetails;
  }

  //manipulations with ui-elements
  private _setValue(element: HTMLInputElement, value: string): void {
    element.value = value;
  }

  private _setSaveBtn(button: HTMLButtonElement): void {
    button.addEventListener(
      "click",
      () => {
        this.fighterDetails.health = Number(this.healthField.value);
        this.fighterDetails.defense = Number(this.defenseField.value);
        this.fighterDetails.attack = Number(this.attackField.value);
        this.hideElement(this.modal);
      },
      false
    );
  }

  private _setCloseBtn(button: HTMLButtonElement): void {
    button.addEventListener(
      "click",
      () => {
        this.hideElement(this.modal);
      },
      false
    );
  }
}
export default InfoModal;
