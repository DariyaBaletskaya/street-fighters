class InfoModal {
  fightersMap: Map<String, any>;

  constructor(fighersMap: Map<String, any>) {
    this.fightersMap = fighersMap;
  }

  handleFighterInfoModal(fighterId: String) {
    const fighter = this.fightersMap.get(fighterId);
    //modal window with fighter's characteristics
    const modal = document.getElementById("fighterInfo") as HTMLDivElement;
    this.showElement(modal);
    //show fighter's info
    const nameField = document.getElementById(
      "fighter-name"
    ) as HTMLInputElement;
    nameField.value = ` ${fighter.name}`;

    const healthField = document.getElementById(
      "fighter-health"
    ) as HTMLInputElement;
    healthField.value = ` ${fighter.health}`;

    const defenseField = document.getElementById(
      "fighter-defense"
    ) as HTMLInputElement;
    defenseField.value = ` ${fighter.defense}`;

    const attackField = document.getElementById(
      "fighter-attack"
    ) as HTMLInputElement;
    attackField.value = ` ${fighter.attack}`;

    //save fighter's info
    const saveButton = document.getElementById("save-btn") as HTMLButtonElement;
    saveButton.addEventListener(
      "click",
      () => {
        fighter.health = healthField.value;
        fighter.defense = defenseField.value;
        fighter.attackField = attackField.value;
        this.fightersMap.set(fighter._id, fighter);
        this.hideElement(modal);
      },
      false
    );

    const closeButton = document.getElementById("close-btn");
    closeButton.addEventListener(
      "click",
      () => {
        this.hideElement(modal);
      },
      false
    );
  }

  //manipulations with ui-elements
  showElement(element: HTMLElement): void {
    element.style.visibility = "visible";
  }

  hideElement(element: HTMLElement): void {
    element.style.visibility = "hidden";
  }

  disableElement(element: HTMLElement): void {
    element.style.display = "none";
  }

  animateElement(element: HTMLElement): void {
    element.classList.add("jump-animated");
  }

  removeAnimation(element: HTMLElement): void {
    element.classList.remove("jump-animated");
  }
}
export default InfoModal;
