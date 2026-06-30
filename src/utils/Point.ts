/**
 * Represents a point in 2D space.
 */
export class Point {

    constructor(
        public x: number = 0,
        public y: number = 0
    ) {}

    public set(
        x: number,
        y: number
    ): void {

        this.x = x;
        this.y = y;
    }

    public move(
        dx: number,
        dy: number
    ): void {

        this.x += dx;
        this.y += dy;
    }

    public clone(): Point {

        return new Point(
            this.x,
            this.y
        );
    }

}