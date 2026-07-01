/**
 * Represents a two-dimensional scale.
 */
export class Scale {

    constructor(
        public x: number = 1,
        public y: number = 1
    ) {}

    public set(
        x: number,
        y: number
    ): void {

        this.x = x;
        this.y = y;

    }

    public reset(): void {

        this.set(
            1,
            1
        );

    }

    public clone(): Scale {

        return new Scale(
            this.x,
            this.y
        );

    }

}