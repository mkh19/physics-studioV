/**
 * Represents a two-dimensional size.
 */
export class Size {

    private _width = 0;

    private _height = 0;

    constructor(
        width: number = 0,
        height: number = 0
    ) {

        this.set(
            width,
            height
        );

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
     * Indicates whether the size is empty.
     */
    public get isEmpty(): boolean {

        return (
            this.width === 0 ||
            this.height === 0
        );

    }

    /**
     * Sets both dimensions.
     */
    public set(
        width: number,
        height: number
    ): void {

        this.width = width;

        this.height = height;

    }

    /**
     * Resets the size.
     */
    public reset(): void {

        this.set(
            0,
            0
        );

    }

    /**
     * Copies another size.
     */
    public copyFrom(
        other: Size
    ): void {

        this.set(
            other.width,
            other.height
        );

    }

    /**
     * Creates a copy.
     */
    public clone(): Size {

        const size = new Size();

        size.copyFrom(
            this
        );

        return size;

    }

    /**
     * Compares two sizes.
     */
    public equals(
        other: Size
    ): boolean {

        return (

            this.width === other.width &&

            this.height === other.height

        );

    }

}