export { drawPokeElement }

function drawPokeElement(poke) {

  const newPokeDiv = document.createElement("div")
  newPokeDiv.classList.add("pokemon")

  newPokeDiv.innerHTML =
    `<div class="img-container">
            <img src="${poke.sprites}" alt="${poke.name}" />
    </div>
    <div class="info">
        <span class="number">${poke.id}</span>
        <h3 class="name">${poke.name}</h3>
        <small class="type">Type: <span>${poke.type}</span></small><br>
        <button class="info-button">View Info</button>
    </div>`

  document.body.append(newPokeDiv)

  const infoButton = newPokeDiv.querySelector('.info-button')
    infoButton.onclick = () => {
        const newPokeModal = document.createElement("div")
        newPokeModal.classList.add("poke-modal-info")
        newPokeModal.innerHTML =
            `
              <dialog class="poke-modal">
              <button class="close">✖</button>
              <div class="img-container">
                  <img src="${poke.sprites}" alt="${poke.name}" />
              </div>
              <div class="info">
              <h3 class="name">${poke.name}</h3>
              <table-->
                <tr>
                  <td>Health (${poke.stats[0].base_stat})</td>
                  <td>
                    <div class="stat-width" style="width: ${poke.stats[0].base_stat}%;"></div>
                  </td>
                </tr>
                <tr>
                  <td>Attack (${poke.stats[1].base_stat})</td>
                  <td>
                    <div class="stat-width" style="width: ${poke.stats[1].base_stat}%;"></div>
                  </td>
                </tr>
                <tr>
                  <td>Defense (${poke.stats[2].base_stat})</td>
                  <td>
                    <div class="stat-width" style="width: ${poke.stats[2].base_stat}%;"></div>
                  </td>
                </tr>
                <tr>
                  <td>Special Attack (${poke.stats[3].base_stat})</td>
                  <td>
                    <div class="stat-width" style="width: ${poke.stats[3].base_stat}%;"></div>
                  </td>
                </tr>
                <tr>
                  <td>Sepecial Defense (${poke.stats[4].base_stat})</td>
                  <td>
                    <div class="stat-width" style="width: ${poke.stats[4].base_stat}%;"></div>
                  </td>
                </tr>
                <tr>
                  <td>Speed (${poke.stats[5].base_stat})</td>
                  <td>
                    <div class="stat-width" style="width: ${poke.stats[5].base_stat}%;"></div>
                  </td>
                </tr>
              </table->
              </div>
          </dialog>
          `

        if (newPokeDiv.childNodes[3] == null) newPokeDiv.append(newPokeModal)

        const modal = newPokeDiv.querySelector('.poke-modal')
        modal.showModal()
        const closeButton = newPokeModal.querySelector('.close')
        closeButton.onclick = () => {
            modal.close()
        }
    }


}
