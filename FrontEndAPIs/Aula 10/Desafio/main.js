imgList = []

const divImages = document.querySelectorAll('.image-container')
let buttonsClick = document.getElementsByTagName('button')
let index = 0

//
function getMultipleFetchCalls() {
    Promise.all([
        fetch('https://dog.ceo/api/breeds/image/random'),
        fetch('https://dog.ceo/api/breeds/image/random'),
        fetch('https://dog.ceo/api/breeds/image/random')
    ]).then((responses) => {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map((response) => {
            return response.json();
        }));
    }).then((data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].status == "success") {
                imgList.push(data[i]);
            }
        }

        document.querySelector(".image-container").innerHTML = `<img src="${imgList[0].message}" class=' rounded mx-auto d-block' style='max-width: 40%; height:40%;'">`
    }).catch((error) => {
        console.log(error);
    });
}
getMultipleFetchCalls()

buttonsClick[0].onclick = (ev) => {
    index = ++index >= imgList.length ? 0 : index;
    console.log(index)
    document.querySelector(".image-container").innerHTML = `<img src="${imgList[index].message}" class=' rounded mx-auto d-block' style='max-width: 40%; height:40%;'">`
}

buttonsClick[1].onclick = (ev) => {
    debugger
    index = --index <= 0 ? imgList.length - 1 : index;
    console.log(index);
    document.querySelector(".image-container").innerHTML = `<img src="${imgList[index].message}" class=' rounded mx-auto d-block' style='max-width: 40%; height:40%;'">`
}