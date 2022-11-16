export { fetchApi }

let urlList = []

async function fetchApi(urlFetch) {
    try {
        const response = await fetch(`${urlFetch}`)
        //const { id, name, sprites, types, stats } = await response.json() // destructure of the data response
        const { url: {url} } = await response.json()
        //const data = await response.json()

        console.log(url)

        return urlList

    } catch (error) {
        console.warn(error)
    }
}
      