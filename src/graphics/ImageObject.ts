import { GraphicObject } from "../core";

/**
 * Represents a drawable image.
 */
export class ImageObject extends GraphicObject {

    private readonly _image = new Image();

    constructor(
        src: string
    ) {

        super();

        this._image.src = src;

    }

    public get image(): HTMLImageElement {

        return this._image;

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

        context.drawImage(
            this._image,
            0,
            0
        );

        context.restore();

    }

}