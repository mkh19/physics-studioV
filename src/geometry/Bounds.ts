/**
 * Represents the local bounds of an object.
 */
export class Bounds {

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

    /**
     * Left edge.
     */
    public get left(): number {

        return this.x;

    }

    /**
     * Top edge.
     */
    public get top(): number {

        return this.y;

    }

    /**
     * Right edge.
     */
    public get right(): number {

        return this.x + this.width;

    }

    /**
     * Bottom edge.
     */
    public get bottom(): number {

        return this.y + this.height;

    }

    /**
     * Horizontal center.
     */
    public get centerX(): number {

        return this.x + this.width / 2;

    }

    /**
     * Vertical center.
     */
    public get centerY(): number {

        return this.y + this.height / 2;

    }

    /**
     * Indicates whether the bounds are empty.
     */
    public get isEmpty(): boolean {

        return (
            this.width === 0 ||
            this.height === 0
        );

    }

    /**
     * Sets all values.
     */
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

    /**
     * Resets the bounds.
     */
    public reset(): void {

        this.set(
            0,
            0,
            0,
            0
        );

    }

    /**
     * Copies another bounds.
     */
    public copyFrom(
        other: Bounds
    ): void {

        this.set(
            other.x,
            other.y,
            other.width,
            other.height
        );

    }

    /**
     * Creates a copy.
     */
    public clone(): Bounds {

        const bounds = new Bounds();

        bounds.copyFrom(
            this
        );

        return bounds;

    }

    /**
     * Checks whether a point is inside.
     */
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

    /**
     * Checks whether two bounds intersect.
     */
    public intersects(
        other: Bounds
    ): boolean {

        return !(

            this.right < other.left ||

            this.left > other.right ||

            this.bottom < other.top ||

            this.top > other.bottom

        );

    }

}