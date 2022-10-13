class randomWinner {

    constructor(listOfUsers){
        this.userToDraw = listOfUsers
    }

    get getUsers(){
        return this.drawUser()
    }

    drawUser (){
        //console.log(this.userToDraw)
        const keys = Object.keys(this.userToDraw)
        const result = keys[Math.floor(Math.random() * keys.length)]
        console.log(keys+" "+result)
        //alert(this.userToDraw[result])
        console.log(this.userToDraw[result])
    }
}