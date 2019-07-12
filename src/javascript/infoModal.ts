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

  constructor() {
    super();
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

  handleFighterInfoModal(fighterDetails: any): JSON {
    this.showElement(this.modal);

    this._setValue(this.nameField, fighterDetails.name);
    this._setValue(this.healthField, fighterDetails.health.toString());
    this._setValue(this.defenseField, fighterDetails.defense.toString());
    this._setValue(this.attackField, fighterDetails.attack.toString());

    this._setCloseBtn(this.closeButton);
    this._setSaveBtn(this.saveButton, fighterDetails);

    return fighterDetails;
  }

  //manipulations with ui-elements
  private _setValue(element: HTMLInputElement, value: any): void {
    element.value = ` ${value}`;
  }

  private _setSaveBtn(button: HTMLButtonElement, fighterDetails: any): void {
    button.addEventListener(
      "click",
      () => {
        fighterDetails.health = Number(this.healthField.value);
        fighterDetails.defense = Number(this.defenseField.value);
        fighterDetails.attack = Number(this.attackField.value);

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
