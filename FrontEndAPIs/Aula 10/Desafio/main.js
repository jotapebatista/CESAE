imgList = []

const divImages = document.querySelectorAll('.image-container')

async function getData() {
    let url = 'https://dog.ceo/api/breeds/image/random'
    let response = await fetch(url)
    let data = await response.json()
    imgList.push(data)
    return data
}

async function getImageUrl() {
    let imageUrl = await getData()
    //console.log(imageUrl)
    if (imageUrl.status !== 'success') {
        alert("Oops! Error downloading image!")
    }
    else {
        drawImage(imageUrl.message)
    }
}

function drawImage(imgResponse) {
    document.querySelector(".image-container").innerHTML = `<img src="${imgResponse}" class=' rounded mx-auto d-block' style='max-width: 40%; height:40%;'">`
    //console.log(imgList)
}

let buttonsClick = document.getElementsByTagName('button')
// buttonsClick[0].onclick = (ev) =>{
//     ev.preventDefault()
//     getImageUrl()
// }

buttonsClick[1].onclick = (ev) => {
    ev.preventDefault()
    arrayLenght = Object.keys(imgList).length
    previousImage = arrayLenght - 2
    console.log(arrayLenght)
    console.log(previousImage)
    console.log(imgList[previousImage].message)
    drawImage(imgList[previousImage].message)
}


function getMultipleFetchCalls() {
    Promise.all([
        fetch('https://dog.ceo/api/breeds/image/random'),
        fetch('https://dog.ceo/api/breeds/image/random'),
        fetch('https://dog.ceo/api/breeds/image/random')
    ]).then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map((response) => {
            return response.json();
        }));
    }).then((data) => {
        imgList.push(data)
        console.log(imgList[0][0].message)
        //document.querySelector(".image-container").innerHTML = `<img src="${imgList[0][0].message}" class=' rounded mx-auto d-block' style='max-width: 40%; height:40%;'">`
        buttonsClick[0].onclick = (ev) => {
            imgList.forEach(element => {
                document.querySelector(".image-container").innerHTML = `<img src="${element}" class=' rounded mx-auto d-block' style='max-width: 40%; height:40%;'">`
                console.log(imgList)
            });
        }
    }).catch((error) => {
        console.log(error);
    });
}
getMultipleFetchCalls()