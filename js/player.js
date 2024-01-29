class Player {

    constructor(gameScreen, left, top, width, heigth) {

        this.gameScreen = gameScreen

        this.barPosition = {
            left: left,
            top: top
        }

        this.barSize = {
            width: width,
            heigth: heigth
        }

        this.barVel = {
            top: 0
        }

        this.playerElement = document.createElement('div')

        this.playerElement.style.backgroundColor = "white"
        this.playerElement.style.position = "absolute"
        this.playerElement.style.left = `${this.barPosition.left}px`
        this.playerElement.style.top = `${this.barPosition.top}px`
        this.playerElement.style.width = `${this.barSize.width}px`
        this.playerElement.style.height = `${this.barSize.heigth}px`

        this.gameScreen.appendChild(this.playerElement)
    }


}