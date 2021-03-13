import { IVelocity } from './types';
import { ctx } from './../index';
import Circle from "./Circle"
import { nanoid } from 'nanoid'


export default class Patron extends Circle {
    public id: string
    constructor(
        public x: number,
        public y: number,
        public radius: number,
        public color: string,
        public velocity: IVelocity
    ) {
        super(x, y, radius, color)
        this.ctx = ctx
        this.id = nanoid()
    }
    draw() {
        super.draw()
    }
    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}