import { GraphicObject } from "../core";
import { Style } from "./Style";

/**
 * Base class for all drawable shapes.
 */
export abstract class Shape extends GraphicObject {

    private readonly _style = new Style();

    public get style(): Style {

        return this._style;

    }

    public override draw(
        context: CanvasRenderingContext2D
    ): void {

        context.save();

        context.translate(
            this.transform.position.x,
            this.transform.position.y
        );

        context.rotate(
            this.transform.rotation
        );

        context.scale(
            this.transform.scale.x,
            this.transform.scale.y
        );

        context.beginPath();

        this.path(
            context
        );

        this.applyStyle(
            context
        );

        context.fill();

        context.stroke();

        context.restore();

    }

    protected applyStyle(
        context: CanvasRenderingContext2D
    ): void {

        context.fillStyle = this.style.fill;

        context.strokeStyle = this.style.stroke;

        context.lineWidth = this.style.lineWidth;

    }

    protected abstract path(
        context: CanvasRenderingContext2D
    ): void;

}