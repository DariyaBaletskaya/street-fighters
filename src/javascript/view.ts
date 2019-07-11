class View {
  element: HTMLElement;

  createElement({ tagName, className = "", attributes = {} }): HTMLElement {
    const element = document.createElement(tagName);
    element.classList.add(className);
    Object.keys(attributes).forEach(key =>
      element.setAttribute(key, attributes[key])
    );

    return element;
  }

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

export default View;
