import { Point } from "../../math";
import { Shape } from "../Shape";

/**
 * Represents a line segment.
 */
export class Line extends Shape {

    private readonly _start = new Point();

    private readonly _end = new Point(
        100,
        0
    );

    constructor(
        start?: Point,
        end?: Point
    ) {

        super();

        if (start) {

            this._start.set(
                start.x,
                start.y
            );

        }

        if (end) {

            this._end.set(
                end.x,
                end.y
            );

        }

    }

    public get start(): Point {

        return this._start;

    }

    public get end(): Point {

        return this._end;

    }

    public setPoints(
        start: Point,
        end: Point
    ): void {

        this._start.set(
            start.x,
            start.y
        );

        this._end.set(
            end.x,
            end.y
        );

    }

    public setStart(
        x: number,
        y: number
    ): void {

        this._start.set(
            x,
            y
        );

    }

    public setEnd(
        x: number,
        y: number
    ): void {

        this._end.set(
            x,
            y
        );

    }

    protected override path(
        context: CanvasRenderingContext2D
    ): void {

        context.moveTo(
            this._start.x,
            this._start.y
        );

        context.lineTo(
            this._end.x,
            this._end.y
        );

    }

}