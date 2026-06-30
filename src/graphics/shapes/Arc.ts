import { Shape } from "../Shape";

export class Arc extends Shape {

    constructor(
        private readonly _radius: number,
        private readonly _start: number,
        private readonly _end: number
    ) {

        super();

    }

    protected override path(
        context: CanvasRenderingContext2D
    ): void {

        context.arc(
            0,
            0,
            this._radius,
            this._start,
            this._end
        );

    }

}