/**
 * Represents four edge values.
 */
export class Thickness {

    private _left = 0;

    private _top = 0;

    private _right = 0;

    private _bottom = 0;

    constructor(
        left: number = 0,
        top: number = 0,
        right: number = 0,
        bottom: number = 0
    ) {

        this.set(
            left,
            top,
            right,
            bottom
        );

    }

    public get left(): number {

        return this._left;

    }

    public set left(
        value: number
    ) {

        this._left = Math.max(
            0,
            value
        );

    }

    public get top(): number {

        return this._top;

    }

    public set top(
        value: number
    ) {

        this._top = Math.max(
            0,
            value
        );

    }

    public get right(): number {

        return this._right;

    }

    public set right(
        value: number
    ) {

        this._right = Math.max(
            0,
            value
        );

    }

    public get bottom(): number {

        return this._bottom;

    }

    public set bottom(
        value: number
    ) {

        this._bottom = Math.max(
            0,
            value
        );

    }

    /**
     * Total horizontal thickness.
     */
    public get horizontal(): number {

        return this.left + this.right;

    }

    /**
     * Total vertical thickness.
     */
    public get vertical(): number {

        return this.top + this.bottom;

    }

    /**
     * Indicates whether all sides are zero.
     */
    public get isEmpty(): boolean {

        return (

            this.left === 0 &&

            this.top === 0 &&

            this.right === 0 &&

            this.bottom === 0

        );

    }

    /**
     * Sets all sides.
     */
    public set(
        left: number,
        top: number,
        right: number,
        bottom: number
    ): void {

        this.left = left;

        this.top = top;

        this.right = right;

        this.bottom = bottom;

    }

    /**
     * Sets all sides to the same value.
     */
    public setUniform(
        value: number
    ): void {

        this.set(
            value,
            value,
            value,
            value
        );

    }

    /**
     * Resets all sides.
     */
    public reset(): void {

        this.setUniform(
            0
        );

    }

    /**
     * Copies another thickness.
     */
    public copyFrom(
        other: Thickness
    ): void {

        this.set(
            other.left,
            other.top,
            other.right,
            other.bottom
        );

    }

    /**
     * Creates a copy.
     */
    public clone(): Thickness {

        const thickness = new Thickness();

        thickness.copyFrom(
            this
        );

        return thickness;

    }

    /**
     * Compares two thickness objects.
     */
    public equals(
        other: Thickness
    ): boolean {

        return (

            this.left === other.left &&

            this.top === other.top &&

            this.right === other.right &&

            this.bottom === other.bottom

        );

    }

    /**
     * Creates a uniform thickness.
     */
    public static uniform(
        value: number
    ): Thickness {

        return new Thickness(

            value,

            value,

            value,

            value

        );

    }

}