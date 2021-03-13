import { ctx } from './../index';

export default class Circle {
    public ctx: any
    constructor(
        public x: number,
        public y: number,
        public radius: number,
        public color: string
    ) {
        this.ctx = ctx
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color
        this.ctx.fill()
    }
}