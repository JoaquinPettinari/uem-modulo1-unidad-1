function render() {
  document.getElementById("app").innerHTML = `
    ${Header()}
    <article class="article">
      ${Title()}
      <div class="grid">
        <div>
          ${ProjectBody()}
          <hr />
          ${Description()}
        </div>
        ${ProjectDonation()}
      </div>
    </article>
  `;
}

render();
setupDonationLogic();
