let playState = false
let muteState = false
let volumeLevel = 1
let firstTimePlaying = true
coverState = false

const audioPlayerElement = document.querySelector('.audio-player')
const audioPlayer = document.querySelector('audio')
const audioCover = audioPlayerElement.querySelector('.audio-cover')
const volumeBar = audioPlayerElement.querySelector('.progressbar')
const audiInfo = audioPlayerElement.querySelector('.audio-info')
const playBtn = audioPlayerElement.querySelector('.btn-play')
const pauseBtn = audioPlayerElement.querySelector('.btn-pause')
const muteBtn = audioPlayerElement.querySelectorAll('button')
const prevBtn = audioPlayerElement.querySelector('.btn-previous')
const nextBtn = audioPlayerElement.querySelector('.btn-next')
const timeTracking = document.querySelector('div.track-progress')

nextBtn.addEventListener('click', () => {
    selectMusicFromList()
    playState = true
    //audioPlayer.currentTime = audioPlayer.currentTime + 1
})
prevBtn.addEventListener('click', () => {
    selectMusicFromList()
    playState = true
    //audioPlayer.currentTime = audioPlayer.currentTime - 1
    //audioPlayer.currentTime = audioPlayer.currentTime + 1
})

muteBtn[0].addEventListener('click', (ev) => {
    muteState = !muteState
    muteBtn[0].classList.add('hidden')
    muteBtn[1].classList.remove('hidden')
    toggleMuteState()
})

muteBtn[1].addEventListener('click', (ev) => {
    muteState = !muteState
    muteBtn[0].classList.remove('hidden')
    muteBtn[1].classList.add('hidden')
    toggleMuteState()
})

function toggleMuteState() {
    if (muteState === false) {
        audioPlayer.volume = volumeLevel
        width = volumeLevel * 100
        pBar[0].style.width = `${width}%`
        audioPlayer.volume = volumeLevel

    } else {
        audioPlayer.volume = 0
        pBar[0].style.width = ''
    }
}

//Initialize volume at 100%.
let pBar = volumeBar.children
pBar[0].style.width = '100%'

playBtn.addEventListener('click', togglePlayState)
pauseBtn.addEventListener('click', togglePlayState)
addEventListener('load', selectMusicFromList)


//Control volume wihtin the user click
volumeBar.addEventListener('click', (ev) => {

    let rect = ev.target.getBoundingClientRect()
    let x = ev.clientX - rect.left //x position within the element.

    if (x >= 0 && x <= 24) {
        pBar[0].style.width = '20%'
        audioPlayer.volume = 0.2
        volumeLevel = 0.2
        muteBtn[0].classList.remove('hidden')
        muteBtn[1].classList.add('hidden')
    } else if (x >= 25 && x <= 48) {
        audioPlayer.volume = 0.4
        pBar[0].style.width = '40%'
        volumeLevel = 0.4
        muteBtn[0].classList.remove('hidden')
        muteBtn[1].classList.add('hidden')
    } else if (x >= 49 && x <= 73) {
        audioPlayer.volume = 0.6
        pBar[0].style.width = '60%'
        volumeLevel = 0.6
        muteBtn[0].classList.remove('hidden')
        muteBtn[1].classList.add('hidden')
    }
    else if (x >= 74 && x <= 96) {
        audioPlayer.volume = 0.8
        pBar[0].style.width = '80%'
        volumeLevel = 0.8
        muteBtn[0].classList.remove('hidden')
        muteBtn[1].classList.add('hidden')
    }
    else if (x >= 97 && x <= 120) {
        audioPlayer.volume = 1
        pBar[0].style.width = '100%'
        volumeLevel = 1
        muteBtn[0].classList.remove('hidden')
        muteBtn[1].classList.add('hidden')
    }
})

function togglePlayState() {
    playState = !playState
    //Switch between play/pause button
    playBtn.classList.toggle('hidden')
    pauseBtn.classList.toggle('hidden')

    
    playState ? audioPlayer.play() : audioPlayer.pause()

}

function coverState(){
    coverState =! coverState
    playState ? audioCover.classList.remove('paused') : audioCover.classList.add('paused')
}

function selectMusicFromList() {
    let item = audioList[Math.floor(Math.random() * audioList.length)]
    audiInfo.childNodes[1].textContent = item.getName
    audiInfo.childNodes[3].textContent = item.getArtist
    audioCover.style.backgroundImage = `url(${item.getCover})`
    audioPlayer.src = item.getSongURL
    audioPlayer.load()
    
   
}

audioPlayer.ontimeupdate = () => {
    const timeProgress = audioPlayerElement.querySelectorAll('.progressbar')
    timeProgress[1].firstElementChild.style.width = `${audioPlayer.currentTime}%`
    timeTracking.innerHTML = `${audioPlayer.currentTime.toFixed(1)} - ${audioPlayer.duration.toFixed(1)}`

}
