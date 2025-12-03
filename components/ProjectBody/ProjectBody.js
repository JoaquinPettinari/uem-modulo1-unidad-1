

function ProjectBody(){
  return `
    <section class="project-body">
      <img
        src="/images/cancha_de_boca.jpg"
        alt="La cancha de boca desde arriba"
        class="stadium-image"
      />
      <aside class="aside">
        <section class="donation-box">
          <h3 class="description">Estamos recaudando fondos para que la Bombonera deje de ser una obra en construcción eterna.</h3>
          <div class="target-container">
            <div class="current">
              <span class="target-status">Necesitamos tu dinero</span>
              <span class="actual-donation">$55.232</span>
              <span class="target">Objetivo: $1.500.000</span>
            </div>
            <span>aca va el stroke</span>
            </div>
            <hr />
            <button class="share">Share</button>
        </section>
        <section class="donation-box">
          <h5>Chose amount</h5>
          <div class="donation-predefined-container">
            <button class="donation-button-selected" value="10">$10</button>
            <button value="25">$25</button>
            <button value="50">$50</button>
            <button value="100">$100</button>
          </div>
          <h5>Or enter custom amount</h5>
          <div class="input-wrapper">
            <input id="input-donation" type="number" class="amount-donation" min="0" max-length="6"/>
          </div>
          <button class="donate-button">Donate</button>
        </section>
      </aside>
    </section>
  `
}
