/**
 * Represents a rectangle.
 */
export class Rect {

    private _x = 0;

    private _y = 0;

    private _width = 0;

    private _height = 0;

    constructor(
        x: number = 0,
        y: number = 0,
        width: number = 0,
        height: number = 0
    ) {

        this.set(
            x,
            y,
            width,
            height
        );

    }

    public get x(): number {

        return this._x;

    }

    public set x(
        value: number
    ) {

        this._x = value;

    }

    public get y(): number {

        return this._y;

    }

    public set y(
        value: number
    ) {

        this._y = value;

    }

    public get width(): number {

        return this._width;

    }

    public set width(
        value: number
    ) {

        this._width = Math.max(
            0,
            value
        );

    }

    public get height(): number {

        return this._height;

    }

    public set height(
        value: number
    ) {

        this._height = Math.max(
            0,
            value
        );

    }

    public get left(): number {

        return this.x;

    }

    public get top(): number {

        return this.y;

    }

    public get right(): number {

        return this.x + this.width;

    }

    public get bottom(): number {

        return this.y + this.height;

    }

    public get centerX(): number {

        return this.x + this.width / 2;

    }

    public get centerY(): number {

        return this.y + this.height / 2;

    }

    public get isEmpty(): boolean {

        return (
            this.width === 0 ||
            this.height === 0
        );

    }

    public set(
        x: number,
        y: number,
        width: number,
        height: number
    ): void {

        this.x = x;

        this.y = y;

        this.width = width;

        this.height = height;

    }

    public reset(): void {

        this.set(
            0,
            0,
            0,
            0
        );

    }

    public copyFrom(
        other: Rect
    ): void {

        this.set(
            other.x,
            other.y,
            other.width,
            other.height
        );

    }

    public clone(): Rect {

        const rect = new Rect();

        rect.copyFrom(
            this
        );

        return rect;

    }

    public contains(
        x: number,
        y: number
    ): boolean {

        return (

            x >= this.left &&
            x <= this.right &&

            y >= this.top &&
            y <= this.bottom

        );

    }

}