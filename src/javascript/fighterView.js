import View from './view';

class FighterView extends View {
  constructor(fighter, handleClick) {
    super();

    this.createFighter(fighter, handleClick);
  }

  createFighter(fighter, handleClick) {
    const { name, source } = fighter;
    const nameElement = this.createName(name);
    const imageElement = this.createImage(source, fighter._id);
    const checkboxElement = this.createCheckbox(fighter._id);
    const checkboxWrapper = this.createElement({ tagName: 'div', className: 'wrapper' });
    
    checkboxWrapper.append(checkboxElement, nameElement);
    
    this.element = this.createElement({ tagName: 'div', className: 'fighter' });
    this.element.setAttribute('id', fighter._id);
    this.element.append(imageElement, checkboxWrapper);
    this.element.addEventListener('click', event => handleClick(event, fighter), true);
  }

 //checkbox for player choice
  createCheckbox(id) {
    const attributes = { 
      type: "checkbox",
      name:"fighter",
      value: id
   };

   const checkboxElement = this.createElement({ tagName: 'input', className: 'fighter-checkbox' , attributes});
   
   return checkboxElement;
  }

  createName(name) {
    const attributes = { for: "fighter" };
    const nameElement = this.createElement({ tagName: 'lable', className: 'name' , attributes});
    nameElement.innerText = name;

    return nameElement;
  }

  createImage(source, id) {
    let className = 'fighter-image';
    // turn players face-to-face 
    if(id > 3) {
        className = 'fighter-image-right';
    }
    const attributes = { src: source };
    const imgElement = this.createElement({
      tagName: 'img',
      className: className,
      attributes
    });

    return imgElement;
  }
}

export default FighterView;