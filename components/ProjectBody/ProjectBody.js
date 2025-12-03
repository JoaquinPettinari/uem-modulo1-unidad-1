
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
              <div class="icon-container">
                <img src="/images/emblem-urgent-svgrepo-com.svg" alt="Emergency icon" class="icon"/>
                <span class="target-status">Necesitamos tu dinero</span>
              </div>
              <span id="total-donations" class="actual-donation">$55.232</span>
              <div class="icon-container">
                <img src="/images/target-svgrepo-com.svg" alt="share icon" class="icon" />
                <span class="target">Objetivo: $1.500.000</span>
              </div>
            </div>
            <div class="progress-circle">
              <svg width="120" height="120">
                <circle class="bg" cx="60" cy="60" r="50"/>
                <circle class="progress" cx="60" cy="60" r="50"/>
              </svg>
              <span class="percentage">0%</span>
            </div>
          </div>

          <hr />
          <button class="share">
            <img src="/images/share-svgrepo-com.svg" alt="share icon" class="icon"/>
            Share
          </button>
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
  updateProgress(total);

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
    updateProgress(total);
  });
}
