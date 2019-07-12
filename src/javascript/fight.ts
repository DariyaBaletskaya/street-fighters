import Fighter from "./fighter";
import View from "./view";

class Fight extends View {
  firstPlayerBtn: HTMLButtonElement;
  firstPlayerIndicator: HTMLProgressElement;
  secondPlayerBtn: HTMLButtonElement;
  secondPlayerIndicator: HTMLProgressElement;

  constructor() {
    super();
    this.firstPlayerBtn = document.getElementById(
      "first-player-btn"
    ) as HTMLButtonElement;
    this.secondPlayerBtn = document.getElementById(
      "second-player-btn"
    ) as HTMLButtonElement;

    this.firstPlayerIndicator = document.getElementById(
      "first-player-health"
    ) as HTMLProgressElement;
    this.secondPlayerIndicator = document.getElementById(
      "second-player-health"
    ) as HTMLProgressElement;
  }

  startFight(fighters: Fighter[]) {
    //display fight-process block
    this.showElement(document.getElementById("fight-process") as HTMLElement);

    //set up indicators with fighter's health value
    this.firstPlayerIndicator.value = fighters[0].health;
    this.secondPlayerIndicator.value = fighters[1].health;

    //set up attack buttons and fight logic
    this._firstPlayerTurn(this.firstPlayerBtn, fighters);
    this._secondPlayerTurn(this.secondPlayerBtn, fighters);
  }

  private _firstPlayerTurn(button: HTMLButtonElement, fighters: Fighter[]) {
    button.innerText = `${fighters[0].name} 's Attack!`;
    button.addEventListener("click", () => {
      // set up animation for health-indicators
      this.animateElement(this.secondPlayerIndicator);
      this.removeAnimation(this.firstPlayerIndicator);
      //compute loss of health
      const healthLost =
        fighters[0].getHitPower() - fighters[1].getBlockPower();
      if (healthLost > 0) {
        this.secondPlayerIndicator.value -= healthLost;
        if (this.secondPlayerIndicator.value <= 0) {
          alert(`Winner: ${fighters[0].name}`);
          location.reload();
        }
      }
    });
  }

  private _secondPlayerTurn(button: HTMLButtonElement, fighters: Fighter[]) {
    button.innerText = `${fighters[1].name} 's Attack!`;
    button.addEventListener("click", () => {
      // set up animation for health-indicators
      this.animateElement(this.firstPlayerIndicator);
      this.removeAnimation(this.secondPlayerIndicator);
      //compute loss of health
      const healthLost =
        fighters[1].getHitPower() - fighters[0].getBlockPower();
      if (healthLost > 0) {
        this.firstPlayerIndicator.value -= healthLost;
        if (this.firstPlayerIndicator.value <= 0) {
          alert(`Winner: ${fighters[1].name}`);
          location.reload();
        }
      }
    });
  }
}
export default Fight;
