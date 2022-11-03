let trackIndex = 0
playState = false
muteState = false

let audioPlayerElement = document.querySelector('.audio-player')

let btnPlay = audioPlayerElement.querySelector('.btn-play')
let btnPause = audioPlayerElement.querySelector('.btn-pause')
let volumeControl = audioPlayerElement.querySelector('.audio-volume-controls-container')

let player = audioPlayerElement.querySelector('audio') // embedded media player

let volume = audioPlayerElement.querySelector('.audio-volume-controls')
let albumCover = audioPlayerElement.querySelector('.audio-cover')
let btnPrev = audioPlayerElement.querySelector('.btn-previous')
let btnNext = audioPlayerElement.querySelector('.btn-next')

progressOverlay = document.getElementsByClassName('progressbar-overlay')


btnPlay.addEventListener('click', togglePlayState)
btnPause.addEventListener('click', togglePlayState)
volumeControl.addEventListener('click', silencePlayerState)
volumeControl.addEventListener('click', volumeScroll)


//TODO: use coordinates to select the volume output of the player
changeVolume = document.addEventListener('click', (ev) => {
  console.log(ev.clientX)
  // if (ev.clientX >= 755  && ev.clientX < 780) {
  //   console.log('20%')
  //   player.volume = 0.2

  // }elseif(ev.clientX >= 755  && ev.clientX < 780) {
  //   console.log('40%')
  //   player.volume = 0.4

  // }elseif(ev.clientX >= 755  && ev.clientX < 780){
  //   console.log('60%')
  //   player.volume = 0.6

  // }elseif(ev.clientX >= 755  && ev.clientX < 845){
  //   console.log('80%')
  //   player.volume = 0.8

  // }else{
  //   console.log('100%')
  //   player.volume = 1
  // }
})


function togglePlayState() {
  playState = !playState

  //Switch Play/Pause buttons depending on the state of the player.
  btnPlay.classList.toggle('hidden')
  btnPause.classList.toggle('hidden')

  playState ? player.play() : player.pause()
}


function silencePlayerState() {
  muteState = !muteState
  volumeBtns = document.getElementsByTagName("button")
  //console.log(muteState)

  if (muteState === true) {
    volumeBtns[0].classList.add('hidden')
    volumeBtns[1].classList.remove('hidden')
    player.muted = true
  } else {
    volumeBtns[0].classList.remove('hidden')
    volumeBtns[1].classList.add('hidden')
    player.muted = false
  }
}

function volumeScroll() {

  progressOverlay[0].classList.add('scroll-progress')
  //console.log(progressOverlay[0])
  progressOverlay[0].style.width = '100%'
}