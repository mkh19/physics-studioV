import { GraphicObject } from "../core";

/**
 * Performs hit testing on graphic objects.
 */
export class HitTest {

    public hit(
        object: GraphicObject,
        x: number,
        y: number
    ): boolean {

        const bounds =
            object.getBounds();

        if (!bounds) {

            return false;

        }

        return bounds.contains(
            x,
            y
        );

    }

}