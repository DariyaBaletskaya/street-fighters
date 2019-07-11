import Fighter from "./fighter";
import View from "./view";

class Fight extends View {
  constructor() {
    super();
  }

  startFight(fighters: Fighter[]) {
    //display fight-process block
    this.showElement(document.getElementById("fight-process"));

    //set up indicators with fighter's health value
    const firstPlayerIndicator = document.getElementById(
      "first-player-health"
    ) as HTMLProgressElement;
    firstPlayerIndicator.value = fighters[0].health;
    const secondPlayerIndicator = document.getElementById(
      "second-player-health"
    ) as HTMLProgressElement;
    secondPlayerIndicator.value = fighters[1].health;

    //set up attack buttons and fight logic
    const firstPlayerBtn = document.getElementById("first-player-btn");
    firstPlayerBtn.innerText = `${fighters[0].name} 's Attack!`;

    firstPlayerBtn.addEventListener("click", () => {
      // set up animation for health-indicators
      this.animateElement(secondPlayerIndicator);
      this.removeAnimation(firstPlayerIndicator);
      //compute loss of health
      const healthLost =
        fighters[0].getHitPower() - fighters[1].getBlockPower();
      if (healthLost > 0) {
        secondPlayerIndicator.value -= healthLost;
        if (secondPlayerIndicator.value <= 0) {
          alert(`Winner: ${fighters[0].name}`);
          location.reload();
        }
      }
    });

    const secondPlayerBtn = document.getElementById("second-player-btn");
    secondPlayerBtn.innerText = `${fighters[1].name} 's Attack!`;
    secondPlayerBtn.addEventListener("click", () => {
      // set up animation for health-indicators
      this.animateElement(firstPlayerIndicator);
      this.removeAnimation(secondPlayerIndicator);
      //compute loss of health
      const healthLost =
        fighters[1].getHitPower() - fighters[0].getBlockPower();
      if (healthLost > 0) {
        firstPlayerIndicator.value -= healthLost;
        if (firstPlayerIndicator.value <= 0) {
          alert(`Winner: ${fighters[1].name}`);
          location.reload();
        }
      }
    });
  }
}
export default Fight;
