import { IVelocity } from './types';
import { ctx } from './../index';
import Patron from './Patron';
import { nanoid } from 'nanoid';

export default class Enemy extends Patron {
    constructor(
        public x: number,
        public y: number,
        public radius: number,
        public color: string,
        public velocity: IVelocity,
        public hp: number
    ) {
        super(x, y, radius, color, velocity)
        this.ctx = ctx
        this.id = nanoid()
    }
    draw() {
        super.draw()
    }
    update() {
        super.update()
    }
}