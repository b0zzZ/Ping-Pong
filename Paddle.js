const SPEED = 0.02

export default class Paddle {
    constructor(PaddleElem) {
        this.PaddleElem = PaddleElem
    }

    get position() {
        return parseFloat(
            getComputedStyle(this.PaddleElem).getPropertyValue("--position")
        )
    }

    set position(value) {
        this.PaddleElem.style.setProperty("--position", value)
    }

    rect() {
        return this.PaddleElem.getBoundingClientRect()
    }

    reset() {
        this.position = 50
    }

    update(delta, ballHeight) {
        this.position += SPEED * delta * (ballHeight - this.position)
    }
}