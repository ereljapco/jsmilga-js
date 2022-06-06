function getElement(element) {
  const selectElement = document.querySelector(element);

  if (!selectElement) {
    throw Error(`Element not selected. Please check ${element}`);
  }

  return selectElement;
}

export default getElement;
