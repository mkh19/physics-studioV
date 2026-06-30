import { GraphicObject } from "./GraphicObject";

export abstract class Shape extends GraphicObject {

    private _fill = "#FFFFFF";

    private _stroke = "#000000";

    private _lineWidth = 1;

    public get fill(): string {

        return this._fill;

    }

    public set fill(value: string) {

        this._fill = value;

    }

    public get stroke(): string {

        return this._stroke;

    }

    public set stroke(value: string) {

        this._stroke = value;

    }

    public get lineWidth(): number {

        return this._lineWidth;

    }

    public set lineWidth(value: number) {

        this._lineWidth = value;

    }

    public override draw(
        context: CanvasRenderingContext2D
    ): void {

        context.save();

        context.translate(
            this.position.x,
            this.position.y
        );

        context.rotate(this.rotation);

        context.beginPath();

        this.path(context);

        context.fillStyle = this.fill;
        context.strokeStyle = this.stroke;
        context.lineWidth = this.lineWidth;

        context.fill();
        context.stroke();

        context.restore();

    }

    protected abstract path(
        context: CanvasRenderingContext2D
    ): void;

}