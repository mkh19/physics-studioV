import { Document } from "../core/Document";
import { GraphicObject } from "../core/GraphicObject";
import { Renderer } from "./Renderer";

/**
 * Renders a document using HTML Canvas.
 */
export class CanvasRenderer extends Renderer {

    constructor(
        private readonly _context: CanvasRenderingContext2D
    ) {

        super();

    }

    public override render(
        document: Document
    ): void {

        this._context.save();

        this._context.fillStyle = document.background;

        this._context.fillRect(
            0,
            0,
            document.width,
            document.height
        );

        for (const layer of document.layers) {

            if (!layer.visible) {

                continue;

            }

            this.renderObject(
                layer
            );

        }

        this._context.restore();

    }

    protected override renderObject(
        object: GraphicObject
    ): void {

        object.draw(
            this._context
        );

    }

}