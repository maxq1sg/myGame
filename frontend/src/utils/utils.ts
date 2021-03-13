import { canvas } from '../index';
export function createCanvas(ctx: any) {
    ctx!.fillStyle = "rgba(0,0,0,0.2)"
    ctx!.fillRect(0, 0, canvas.width, canvas.height)
    ctx!.canvas!.width = window.innerWidth
    ctx!.canvas!.height = window.innerHeight
}