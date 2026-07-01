import { GraphicObject } from "../core";

export class TextObject extends GraphicObject {

    private _text: string;

    private _fontFamily = "Arial";

    private _fontSize = 18;

    private _color = "#000000";

    private _align: CanvasTextAlign = "left";

    private _baseline: CanvasTextBaseline = "alphabetic";

    constructor(
        text: string = ""
    ) {

        super();

        this._text = text;

    }

    public get text(): string {

        return this._text;

    }

    public set text(value: string) {

        this._text = value;

    }

    public get fontFamily(): string {

        return this._fontFamily;

    }

    public set fontFamily(value: string) {

        this._fontFamily = value;

    }

    public get fontSize(): number {

        return this._fontSize;

    }

    public set fontSize(value: number) {

        this._fontSize = value;

    }

    public get color(): string {

        return this._color;

    }

    public set color(value: string) {

        this._color = value;

    }

    public get align(): CanvasTextAlign {

        return this._align;

    }

    public set align(value: CanvasTextAlign) {

        this._align = value;

    }

    public get baseline(): CanvasTextBaseline {

        return this._baseline;

    }

    public set baseline(value: CanvasTextBaseline) {

        this._baseline = value;

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

    context.fillStyle = this.color;

    context.font =
        `${this.fontSize}px ${this.fontFamily}`;

    context.textAlign = this.align;

    context.textBaseline = this.baseline;

    context.fillText(
        this.text,
        0,
        0
    );

    context.restore();

}
}