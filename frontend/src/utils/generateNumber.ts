import { canvas } from './../index';
export default function enemyData() {
    let x = Math.random()
    let y = Math.random()
    while (true) {
        if (x < 0.15 || x > 0.85 || y < 0.15 || y > 0.85) {
            break
        }
        else {
            x = Math.random()
            y = Math.random()
        }
    }
    x *= canvas.width
    y *= canvas.height
    const color = getRandomColor()
    const radius = getRandomInRange(23, 60)
    return { x, y, color, radius }
}


export function getRandomColor(): string {
    const randomNumbers: string[] = []
    for (let i = 0; i < 3; i++) {
        randomNumbers.push(getRandomInRange(50, 255).toString(16))
    }
    return "#" + randomNumbers.join("")
}

function getRandomInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
