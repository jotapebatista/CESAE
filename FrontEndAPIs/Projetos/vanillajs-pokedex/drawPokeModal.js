export { modalPokemonDraw }

function modalPokemonDraw(poke) {
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
                  <td>Health</td>
                  <td>
                    <div class="stat-width" style="width: ${poke.stats[0].base_stat}%;"></div>
                  </td>
                </tr>
                <tr>
                  <td>Attack</td>
                  <td>
                    <div class="stat-width" style="width: ${poke.stats[1].base_stat}%;"></div>
                  </td>
                </tr>
                <tr>
                  <td>Defense</td>
                  <td>
                    <div class="stat-width" style="width: ${poke.stats[2].base_stat}%;"></div>
                  </td>
                </tr>
                <tr>
                  <td>Special Attack</td>
                  <td>
                    <div class="stat-width" style="width: ${poke.stats[3].base_stat}%;"></div>
                  </td>
                </tr>
                <tr>
                  <td>Sepecial Defense</td>
                  <td>
                    <div class="stat-width" style="width: ${poke.stats[4].base_stat}%;"></div>
                  </td>
                </tr>
                <tr>
                  <td>Speed</td>
                  <td>
                    <div class="stat-width" style="width: ${poke.stats[5].base_stat}%;"></div>
                  </td>
                </tr>
              </table->
              </div>
          </dialog>
          `
        const validateDiv = document.querySelector(".pokemon")

        if (validateDiv.querySelector(".poke-modal-info") == null) {
            console.log("Element does not exist")
            newPokeDiv.append(newPokeModal)
        } else {
            console.log("Exists")
        }


        const modal = newPokeDiv.querySelector('.poke-modal')
        modal.showModal()
        const closeButton = newPokeModal.querySelector('.close')
        closeButton.onclick = () => {
            modal.close()
        }
    }


    return newPokeModal
}
