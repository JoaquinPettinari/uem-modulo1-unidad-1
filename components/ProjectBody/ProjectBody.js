
function ProjectBody() {
  return `
    <section class="project-body">
      <img
        src="/images/cancha_de_boca.jpg"
        alt="La cancha de boca desde arriba"
        class="stadium-image"
      />

      <aside class="aside">

        <section class="donation-box">
          <h3 class="description">
            Estamos recaudando fondos para que la Bombonera deje de ser una obra en construcción eterna.
          </h3>

          <div class="target-container">
            <div class="current">
              <span class="target-status">Necesitamos tu dinero</span>
              <span id="total-donations" class="actual-donation">$55.232</span>
              <span class="target">Objetivo: $1.500.000</span>
            </div>
            <span>aca va el stroke</span>
          </div>

          <hr />
          <button class="share">Share</button>
        </section>

        <section class="donation-box">
          <h5>Elegir monto</h5>

          <div class="donation-predefined-container">
            <button data-amount="10" class="predefined-amount">$10</button>
            <button data-amount="25" class="predefined-amount selected">$25</button>
            <button data-amount="50" class="predefined-amount">$50</button>
            <button data-amount="100" class="predefined-amount">$100</button>
          </div>

          <h5>O lo que vos quieras</h5>
          <div class="input-wrapper">
            <input
              id="input-donation"
              type="number"
              class="amount-donation"
              min="0"
              max-length="6"
            />
          </div>

          <button id="donate-btn" class="donate-button">Donar</button>
        </section>

      </aside>
    </section>
  `
}

function setupDonationLogic() {
  const input = document.getElementById("input-donation");
  const buttons = document.querySelectorAll(".predefined-amount");
  const donateBtn = document.getElementById("donate-btn");
  const totalDisplay = document.getElementById("total-donations");
  const defaultBtn = document.querySelector(".selected");
  const defaultValue = defaultBtn.getAttribute('data-amount');
  input.value = defaultValue

  let total = 55_232;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("selected"));

      btn.classList.add("selected");

      input.value = btn.dataset.amount;
    });
  });

  input.addEventListener("input", () => {
    buttons.forEach(b => b.classList.remove("selected"));
  });

  donateBtn.addEventListener("click", () => {
    const amount = Number(input.value);

    if (!amount || amount <= 0) {
      alert("Poné un monto válido, por el amor a Riquelme.");
      return;
    }

    total += amount;

    totalDisplay.textContent = `$${total.toLocaleString("es-AR")}`;

    input.value = defaultValue;

    alert("Gracias por poner tu granito, realmente lo vamos a usar");

    buttons.forEach(b => b.classList.remove("selected"));
    defaultBtn.classList.add("selected")
  });
}
