class Game {
    constructor() {
        this.gameScreen = document.getElementById("gameScreen")
        this.gameSize = {
            height: 400,
            width: 800
        }

        this.player1 = undefined
        this.player2 = undefined
        this.ball = undefined
        this.intervalId = undefined
    }

    start() {
        this.setGameStyles()
        this.setGameDimensions()
        this.createElements()
        this.setEventListeners()
        this.startGameLoop()
    }

    setGameDimensions() {
        this.gameScreen.style.width = `${this.gameSize.width}px`
        this.gameScreen.style.height = `${this.gameSize.height}px`
    }

    createElements() {
        //MAIN ELEMENTS
        this.player1 = new Player(this.gameScreen, 10, (this.gameSize.height / 2) - 30, 10, 60)
        this.player2 = new Player(this.gameScreen, 760, (this.gameSize.height / 2) - 30, 10, 60)
        this.ball = new Ball(this.gameScreen, (this.gameSize.width / 2) - 20, (this.gameSize.height / 2) - 10, 20, 20)

        //SCORE
        this.counter = new Counter(this.gameScreen, 10, (this.gameSize.height / 2) - 30, 10, 60)
    }

    setGameStyles() {
        this.gameScreen.style.marginLeft = "17%"
        this.gameScreen.style.marginTop = "7%"
        this.gameScreen.style.border = "solid 10px white"
        const body = document.querySelector("body")
        body.style.backgroundColor = "black"
        body.style.fontFamily = 'Sixtyfour'
    }

    startGameLoop() {
        this.intervalId = setInterval(() => {
            this.movePlayers()
        }, 15)
    }


    movePlayers() {
        this.player2.barPosition.top += this.player2.barVel.top;

        this.player2.barPosition.top = Math.max(0, Math.min(this.gameSize.height - this.player2.barSize.heigth, this.player2.barPosition.top));

        this.player1.barPosition.top += this.player1.barVel.top;

        this.player1.barPosition.top = Math.max(0, Math.min(this.gameSize.height - this.player1.barSize.heigth, this.player1.barPosition.top));

        this.player2.playerElement.style.top = `${this.player2.barPosition.top}px`;
        this.player1.playerElement.style.top = `${this.player1.barPosition.top}px`;
    }





    setEventListeners() {
        const moveAmount = 10

        document.addEventListener("keydown", event => {
            if (event.key.startsWith("Arrow")) {
                event.preventDefault()
                switch (event.key) {
                    case "ArrowUp":
                        this.player2.barVel.top = -moveAmount
                        break
                    case "ArrowDown":
                        this.player2.barVel.top = moveAmount
                        break
                }
            } else if (event.key === "w") {
                event.preventDefault()
                this.player1.barVel.top = -moveAmount
            } else if (event.key === "s") {
                event.preventDefault()
                this.player1.barVel.top = moveAmount
            }
        })


        document.addEventListener("keyup", event => {
            if (event.key.startsWith("Arrow")) {
                event.preventDefault()
                this.player2.barVel.top = 0
            } else if (event.key === "w" || event.key === "s") {
                event.preventDefault()
                this.player1.barVel.top = 0
            }
        })
    }

}
