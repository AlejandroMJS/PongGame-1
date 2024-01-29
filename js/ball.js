class Ball {

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

        this.ballVel = {
            top: 0,
            left: 0
        }

        this.ballElement = document.createElement('div')

        this.ballElement.style.backgroundColor = "white"
        this.ballElement.style.position = "absolute"
        this.ballElement.style.borderRadius = "30px"
        this.ballElement.style.left = `${this.barPosition.left}px`
        this.ballElement.style.top = `${this.barPosition.top}px`
        this.ballElement.style.width = `${this.barSize.width}px`
        this.ballElement.style.height = `${this.barSize.heigth}px`

        this.gameScreen.appendChild(this.ballElement)
    }


}

