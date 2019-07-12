import View from "./view";

class FighterView extends View {
  constructor(fighter: any, handleClick: (event: Event, fighter: any) => void) {
    super();

    this.createFighter(fighter, handleClick);
  }

  createFighter(
    fighter: any,
    handleClick: (event: Event, fighter: any) => void
  ): void {
    const { name, source } = fighter;
    const nameElement: HTMLElement = this.createName(name);
    const imageElement: HTMLElement = this.createImage(source, fighter._id);
    const checkboxElement: HTMLElement = this.createCheckbox(fighter._id);
    const checkboxWrapper: HTMLElement = super.createElement({
      tagName: "div",
      className: "wrapper"
    });

    checkboxWrapper.append(checkboxElement, nameElement);

    this.element = super.createElement({
      tagName: "div",
      className: "fighter"
    });
    this.element.setAttribute("id", fighter._id);
    this.element.append(imageElement, checkboxWrapper);
    this.element.addEventListener(
      "click",
      event => handleClick(event, fighter),
      true
    );
  }

  //checkbox for player choice
  createCheckbox(id: number): HTMLElement {
    const attributes: Object = {
      type: "checkbox",
      name: "fighter",
      value: id
    };

    const checkboxElement: HTMLElement = super.createElement({
      tagName: "input",
      className: "fighter-checkbox",
      attributes
    });

    return checkboxElement;
  }

  createName(name: string): HTMLElement {
    const attributes: Object = { for: "fighter" };
    const nameElement: HTMLElement = super.createElement({
      tagName: "lable",
      className: "name",
      attributes
    });
    nameElement.innerText = name;

    return nameElement;
  }

  createImage(source: string, id: number): HTMLElement {
    let className: string = "fighter-image";
    // turn players face-to-face
    if (id > 3) {
      className = "fighter-image-right";
    }
    const attributes: Object = { src: source };
    const imgElement: HTMLElement = super.createElement({
      tagName: "img",
      className: className,
      attributes
    });

    return imgElement;
  }
}

export default FighterView;
