function render() {
  document.getElementById("app").innerHTML = `
    <article class="article">
      ${Header()}
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
