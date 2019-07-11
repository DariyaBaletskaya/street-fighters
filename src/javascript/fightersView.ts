import View from "./view";
import FighterView from "./fighterView";
import { fighterService } from "./services/fightersService";
import InfoModal from "./infoModal";
import Fighter from "./fighter";
import Fight from "./fight";

class FightersView extends View {
  readonly LIMIT_PLAYERS: number = 2;
  modal: HTMLElement;
  fighters: HTMLElement[];
  choosenFighters: any;
  checkboxes: HTMLInputElement[];
  startGameBtn: HTMLButtonElement;

  handleClick: (fighter: any) => void;

  constructor(fighters: JSON[]) {
    super();
    this.handleClick = this.handleFighterClick.bind(this);
    this.createFighters(fighters);

    this.modal = document.getElementById("fighterInfo");
    this.fighters = [
      ...document.getElementsByClassName("fighter")
    ] as HTMLElement[];

    this.startGameBtn = document.getElementById(
      "start-game-btn"
    ) as HTMLButtonElement;
  }

  fightersDetailsMap = new Map();

  createFighters(fighters: JSON[]): void {
    const fighterElements = fighters.map(fighter => {
      const fighterView = new FighterView(fighter, this.handleClick);

      return fighterView.element;
    });

    this.element = this.createElement({
      tagName: "div",
      className: "fighters"
    });
    this.element.append(...fighterElements);
  }

  async handleFighterClick(event: Event, fighterDetails: any) {
    try {
      if (!this.fightersDetailsMap.has(fighterDetails._id)) {
        fighterDetails = await fighterService.getFighterDetails(
          fighterDetails._id
        );

        this.fightersDetailsMap.set(fighterDetails._id, fighterDetails);
      }

      let updatedFighterDetails = new InfoModal(
        fighterDetails
      ).handleFighterInfoModal();
      this.fightersDetailsMap.set(fighterDetails._id, updatedFighterDetails);
      this.setPlayers();
    } catch (error) {
      console.warn(error);
    }
  }

  setPlayers(): void {
    this.checkboxes = [
      ...document.getElementsByClassName("fighter-checkbox")
    ] as HTMLInputElement[];

    this.checkboxes.map(element => {
      element.addEventListener("click", () => {
        this.choosenFighters = document.querySelectorAll(
          ".fighter-checkbox:checked"
        );

        if (this.choosenFighters.length == this.LIMIT_PLAYERS) {
          document
            .getElementById("start-game-btn")
            .addEventListener("click", () => {
              //hide settings block
              this.hideElement(document.getElementById("game-settings"));
              //hide checkboxes
              this.checkboxes.map(e => this.hideElement(e));
              //hide extra players
              this.fighters
                .filter(
                  e =>
                    e.id != this.choosenFighters[0].defaultValue &&
                    e.id != this.choosenFighters[1].defaultValue
                )
                .map(e => {
                  this.hideElement(e);
                });
              //disable modal with fighter's info
              this.disableElement(this.modal);

              let [firstFighter, secondFighter] = [...this.choosenFighters].map(
                e => {
                  return this.fightersDetailsMap.get(e.defaultValue);
                }
              );

              firstFighter = new Fighter(
                firstFighter.id,
                firstFighter.name,
                firstFighter.health,
                firstFighter.attack,
                firstFighter.defense
              );

              secondFighter = new Fighter(
                secondFighter.id,
                secondFighter.name,
                secondFighter.health,
                secondFighter.attack,
                secondFighter.defense
              );
              //start fight
              new Fight().startFight([firstFighter, secondFighter]);
            });
        } else if (this.choosenFighters.length > this.LIMIT_PLAYERS) {
          element.checked = false;
          alert("You can choose only two fighters!");
        }
      });
    });
  }
}

export default FightersView;
