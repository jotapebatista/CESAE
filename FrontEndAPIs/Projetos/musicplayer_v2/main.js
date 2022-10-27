let playState = false
let muteState = false
let volumeLevel = 1
let firstTimePlaying = true

const audioPlayerElement = document.querySelector('.audio-player')
const audioPlayer = document.querySelector('audio')
const audioCover = audioPlayerElement.querySelector('.audio-cover')
const progressBar = audioPlayerElement.querySelectorAll('.progressbar')
const audiInfo = audioPlayerElement.querySelector('.audio-info')
const playBtn = audioPlayerElement.querySelector('.btn-play')
const pauseBtn = audioPlayerElement.querySelector('.btn-pause')
const muteBtn = audioPlayerElement.querySelectorAll('button')
const prevBtn = audioPlayerElement.querySelector('.btn-previous')
const nextBtn = audioPlayerElement.querySelector('.btn-next')
const trackTimeProgress = audioPlayerElement.querySelector('.track-time-progress')
const volumeLevelBar = progressBar[0].firstElementChild // Volume level bar ONLY (Html Element)
const trackProgressBar = progressBar[1].firstElementChild // Track progress bar ONLY (Html Element)

//Initialize volume at 100%.
volumeLevelBar.style.width = '100%'

//Load a random music from the list on window load.
addEventListener('load', selectMusicFromList)

//Controls the play button event
playBtn.addEventListener('click', () => {
    togglePlayState(true)
    audioPlayer.play()
})
//Controls the pause button event
pauseBtn.addEventListener('click', () => {
    togglePlayState(false)
    audioPlayer.pause()
})

//Controls the next button event
nextBtn.addEventListener('click', () => {
    selectMusicFromList()
    togglePlayState(false)
    resetProgressBars()
})

//Controls the previous button event
prevBtn.addEventListener('click', () => {
    selectMusicFromList()
    togglePlayState(false)
    resetProgressBars()
})

//Controls the mute button event
muteBtn[0].addEventListener('click', (ev) => {
    muteState = !muteState
    muteBtn[0].classList.add('hidden')
    muteBtn[1].classList.remove('hidden')
    toggleMuteState()
})

//Controls the mute button event
muteBtn[1].addEventListener('click', (ev) => {
    muteState = !muteState
    muteBtn[0].classList.remove('hidden')
    muteBtn[1].classList.add('hidden')
    toggleMuteState()
})

//Controls volume wiht the user click hover the progress bar
progressBar[0].addEventListener('click', (ev) => {
    //Change the muted state if pressed in the progress bar.
    muteState =! muteState
    muteBtn[0].classList.remove('hidden')
    muteBtn[1].classList.add('hidden')
    let rect = ev.target.getBoundingClientRect()

    parsedClick = 100 * ((ev.clientX - rect.left) / (rect.right - rect.left))

    volumeLevelBar.style.width = `${parsedClick}%`
    volumeLevel = (parsedClick.toFixed(0) / 100).toFixed(0)
    console.log(volumeLevel)
})

//Toggles audio muted state
function toggleMuteState() {
    console.log(volumeLevel)
    if (muteState === false) {
        audioPlayer.volume = volumeLevel
        width = volumeLevel * 100
        volumeLevelBar.style.width = `${width}%`
        audioPlayer.volume = volumeLevel

    } else {
        audioPlayer.volume = 0
        volumeLevelBar.style.width = ''
    }
}

//Toggles play state
function togglePlayState(playState = !playState) {

    if (playState === true) {
        playBtn.classList.add('hidden')
        pauseBtn.classList.remove('hidden')
    }
    else {
        playBtn.classList.remove('hidden')
        pauseBtn.classList.add('hidden')
    }
}

//Updates over time the music/track progress
audioPlayer.ontimeupdate = () => {
    trackProgressBar.style.width = `${audioPlayer.currentTime}%`
    trackTimeProgress.textContent = `${audioPlayer.currentTime.toFixed(1)} - ${audioPlayer.duration.toFixed(1)}`
}

//Toggles the rotation of the track cover
function coverSetState() {
    return playState ? audioCover.classList.remove('paused') : audioCover.classList.add('paused')
}

//Resets the audio progress bar
function resetProgressBars() {
    trackProgressBar.style.width = '0%' //Time div reset width.
    trackTimeProgress.textContent = '0:00 - 0:00' //Audio Time div reset
}

//Randomly selects a music from the list
function selectMusicFromList() {
    let item = audioList[Math.floor(Math.random() * audioList.length)]
    audiInfo.childNodes[1].textContent = item.getName
    audiInfo.childNodes[3].textContent = item.getArtist
    audioCover.style.backgroundImage = `url(${item.getCover})`
    audioPlayer.src = item.getSongURL
    audioPlayer.load()
    return [item.getName, item.getArtist, item.getCover, item.getCover]
}
