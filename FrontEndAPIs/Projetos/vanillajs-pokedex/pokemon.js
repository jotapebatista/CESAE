class Pokemon {
    constructor( id, name, type, sprites, stats) {
        this.id = id
        this.name = name
        this.type = type
        this.sprites = sprites
        this.stats = stats
    }

    getPokemonInfo(){
        return [this.id, this.name, this.type, this.sprites]
    }
}

export { Pokemon }