import { Point } from "../../math";
import { Shape } from "../Shape";

export class Line extends Shape {

    private readonly _start: Point;

    private readonly _end: Point;

    constructor(
        start: Point = new Point(),
        end: Point = new Point(100, 0)
    ) {

        super();

        this._start = start;
        this._end = end;

    }

    public get start(): Point {

        return this._start;

    }

    public get end(): Point {

        return this._end;

    }

    protected override path(
        context: CanvasRenderingContext2D
    ): void {

        context.moveTo(
            this.start.x,
            this.start.y
        );

        context.lineTo(
            this.end.x,
            this.end.y
        );

    }

}