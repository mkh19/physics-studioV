import { GraphicObject } from "../../core";

/**
 * Represents a simple drawable text.
 */
export class TextShape extends GraphicObject {

    private _content = "";

    public font = "18px Arial";

    public color = "#000000";

    constructor(
        content: string = ""
    ) {

        super();

        this._content = content;

    }

    public get content(): string {

        return this._content;

    }

    public set content(
        value: string
    ) {

        this._content = value;

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

        context.font = this.font;

        context.fillStyle = this.color;

        context.fillText(
            this.content,
            0,
            0
        );

        context.restore();

    }

}