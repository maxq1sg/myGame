import { ctx } from './../index';
import Circle from "./Circle"

export default class Player extends Circle {
    constructor(
        public x: number,
        public y: number,
        public radius: number,
        public color: string
    ) {
        super(x, y, radius, color)
        this.ctx = ctx
    }
    draw() {
        super.draw()
    }
}