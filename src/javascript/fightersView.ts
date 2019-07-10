import View from "./view";
import FighterView from "./fighterView";
import { fighterService } from "./services/fightersService";
import InfoModal from "./infoModal";

class FightersView extends View {
  handleClick: (fighter: any) => void;

  constructor(fighters: JSON[]) {
    super();
    this.handleClick = this.handleFighterClick.bind(this);
    this.createFighters(fighters);
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

  async handleFighterClick(event: Event, fighter: any) {
    try {
      if (!this.fightersDetailsMap.has(fighter._id)) {
        fighter = await fighterService.getFighterDetails(fighter._id);
        this.fightersDetailsMap.set(fighter._id, fighter);
      }
      new InfoModal(this.fightersDetailsMap).handleFighterInfoModal(
        fighter._id
      );
      // this.setFightersForGame();
    } catch (error) {
      console.warn(error);
    }
  }

  // setFightersForGame() {
  //   // necessary amount of players for the game
  //   const LIMIT_PLAYERS = 2;
  //   //ui-elements
  //   const modal = document.getElementById("fighterInfo");
  //   const checkboxes = [...document.getElementsByClassName("fighter-checkbox")];
  //   const fighters = [...document.getElementsByClassName("fighter")];

  //   checkboxes.map(element => {
  //     element.addEventListener("click", () => {
  //       const choosenFighters = document.querySelectorAll(
  //         ".fighter-checkbox:checked"
  //       );

  //       if (choosenFighters.length == LIMIT_PLAYERS) {
  //         document
  //           .getElementById("start-game-btn")
  //           .addEventListener("click", () => {
  //             //hide settings block
  //             this.hideElement(document.getElementById("game-settings"));
  //             //hide checkboxes
  //             checkboxes.map(e => this.hideElement(e));
  //             //hide extra players
  //             fighters
  //               .filter(
  //                 e =>
  //                   e.id != choosenFighters[0].defaultValue &&
  //                   e.id != choosenFighters[1].defaultValue
  //               )
  //               .map(e => {
  //                 this.hideElement(e);
  //               });
  //             //disable modal with fighter's info
  //             this.disableElement(modal);
  //             //start fight
  //             this.fight([...choosenFighters]);
  //           });
  //       } else if (choosenFighters.length > LIMIT_PLAYERS) {
  //         element.checked = false;
  //         alert("You can choose only two fighters!");
  //       }
  //     });
  //   });
  // }

  // fight(fighters) {
  //   //display fight-process block
  //   this.showElement(document.getElementById("fight-process"));

  //   //get choosen player's info from the map and create fighters
  //   let [firstFighter, secondFighter] = fighters.map(e => {
  //     return this.fightersDetailsMap.get(e.defaultValue);
  //   });
  //   firstFighter = new Fighter(
  //     firstFighter._id,
  //     firstFighter.name,
  //     firstFighter.health,
  //     firstFighter.attack,
  //     firstFighter.defense
  //   );

  //   secondFighter = new Fighter(
  //     secondFighter._id,
  //     secondFighter.name,
  //     secondFighter.health,
  //     secondFighter.attack,
  //     secondFighter.defense
  //   );

  //   //set up indicators with fighter's health value
  //   const firstPlayerIndicator = document.getElementById("first-player-health");
  //   firstPlayerIndicator.value = firstFighter.health;
  //   const secondPlayerIndicator = document.getElementById(
  //     "second-player-health"
  //   );
  //   secondPlayerIndicator.value = secondFighter.health;

  //   //set up attack buttons and fight logic
  //   const firstPlayerBtn = document.getElementById("first-player-btn");
  //   firstPlayerBtn.innerText = `${firstFighter.name} 's Attack!`;

  //   firstPlayerBtn.addEventListener("click", () => {
  //     // set up animation for health-indicators
  //     this.animateElement(secondPlayerIndicator);
  //     this.removeAnimation(firstPlayerIndicator);
  //     //compute loss of health
  //     const healthLost =
  //       firstFighter.getHitPower() - secondFighter.getBlockPower();
  //     if (healthLost > 0) {
  //       secondPlayerIndicator.value -= healthLost;
  //       if (secondPlayerIndicator.value <= 0) {
  //         alert(`Winner: ${firstFighter.name}`);
  //         location.reload();
  //       }
  //     }
  //   });

  //   const secondPlayerBtn = document.getElementById("second-player-btn");
  //   secondPlayerBtn.innerText = `${secondFighter.name} 's Attack!`;
  //   secondPlayerBtn.addEventListener("click", () => {
  //     // set up animation for health-indicators
  //     this.animateElement(firstPlayerIndicator);
  //     this.removeAnimation(secondPlayerIndicator);
  //     //compute loss of health
  //     const healthLost =
  //       secondFighter.getHitPower() - firstFighter.getBlockPower();
  //     if (healthLost > 0) {
  //       firstPlayerIndicator.value -= healthLost;
  //       if (firstPlayerIndicator.value <= 0) {
  //         alert(`Winner: ${secondFighter.name}`);
  //         location.reload();
  //       }
  //     }
  //   });
  // }
}

export default FightersView;
