export { htmlElement }

function htmlElement(data) {

document.querySelector('#app').innerHTML = `

    <div class="url-list">
    <p>${data[0].shortenedURL}</p>
    </div>
    <div class="url-shortned-list">
    </div>
    <div class="url-toShorten">
    </div>
`
}
