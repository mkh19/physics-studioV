import { GraphicObject } from "../core";
import { Bounds } from "../geometry";

/**
 * Renders the selection outline.
 */
export class SelectionRenderer {

    public render(
        context: CanvasRenderingContext2D,
        object: GraphicObject
    ): void {

        if (!object.selected) {

            return;

        }

        const bounds = object.getBounds();

        if (!bounds) {

            return;

        }

        context.save();

        context.strokeStyle = "#1E88E5";

        context.lineWidth = 1;

        context.setLineDash([
            5,
            5
        ]);

        context.strokeRect(
            bounds.x,
            bounds.y,
            bounds.width,
            bounds.height
        );

        context.restore();

    }

}