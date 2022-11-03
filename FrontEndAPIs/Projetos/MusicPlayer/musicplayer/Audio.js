class Audio {
  #Name
  #Artist
  #Url
  #Cover

  constructor(audio){
    this.#Name = audio.name
    this.#Artist = audio.artist
    this.#Url = audio.url
    this.#Cover = audio.cover
  }

  set name(name){
    this.#Name = name
  }

  set artist(artist){
    this.#Artist = artist
  }

  set url(url){
    this.#Url = url
  }

  set cover(cover){
    this.#Cover = cover
  }

  get getName() {
    return this.#Name
  }

  get getArtist() {
    return this.#Artist
  }

  get getCover() {
    return this.#Cover
  }

  get getSongURL(){
    return this.#Url
  }
}