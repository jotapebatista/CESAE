class Pokemon {
    constructor( id, name, type, sprites) {
        this.id = id
        this.name = name
        this.type = type
        this.sprites = sprites
    }

    getPokemonInfo(){
        return [this.id, this.name, this.type, this.sprites]
    }
}

export { Pokemon }