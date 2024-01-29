
class Counter {
    constructor(gameScreen, left, top, width, height) {
        this.gameScreen = gameScreen

        this.containerPosition = {
            left: left,
            top: top
        }

        this.containerSize = {
            width: width,
            height: height
        }

        this.counterElement = document.createElement("div")

        this.counterElement.innerHTML = "Score: 0-0"
        this.counterElement.style.color = "white"
        this.counterElement.style.fontSize = "2em"
        this.counterElement.style.width = "400px"
        this.counterElement.style.marginTop = "10px"
        this.counterElement.style.position = "relative"
        this.counterElement.style.display = "flex"
        this.counterElement.style.marginLeft = "33%"
        this.counterElement.style.paddingTop = "30px"
        this.counterElement.style.marginBottom = "-50px"
        this.counterElement.style.justifyContent = "center"


        document.querySelector("body").prepend(this.counterElement)
    }
}