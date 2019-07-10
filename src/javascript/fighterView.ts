import View from "./view";

class FighterView extends View {
  element: HTMLElement;

  constructor(fighter: any, handleClick: (event: Event, fighter: any) => void) {
    super();

    this.createFighter(fighter, handleClick);
  }

  createFighter(
    fighter: any,
    handleClick: (event: Event, fighter: any) => void
  ) {
    const { name, source } = fighter;
    const nameElement = this.createName(name);
    const imageElement = this.createImage(source, fighter._id);
    const checkboxElement = this.createCheckbox(fighter._id);
    const checkboxWrapper = super.createElement({
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
  createCheckbox(id: number) {
    const attributes = {
      type: "checkbox",
      name: "fighter",
      value: id
    };

    const checkboxElement = super.createElement({
      tagName: "input",
      className: "fighter-checkbox",
      attributes
    });

    return checkboxElement;
  }

  createName(name: string) {
    const attributes = { for: "fighter" };
    const nameElement = super.createElement({
      tagName: "lable",
      className: "name",
      attributes
    });
    nameElement.innerText = name;

    return nameElement;
  }

  createImage(source: string, id: number) {
    let className = "fighter-image";
    // turn players face-to-face
    if (id > 3) {
      className = "fighter-image-right";
    }
    const attributes = { src: source };
    const imgElement = super.createElement({
      tagName: "img",
      className: className,
      attributes
    });

    return imgElement;
  }
}

export default FighterView;
