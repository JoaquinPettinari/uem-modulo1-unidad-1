function render() {
  document.getElementById("app").innerHTML = `
    ${Header()}
    ${ProjectBody()}
  `;
}

render();
