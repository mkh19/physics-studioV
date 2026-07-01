import { GraphicObject } from "../core";
import { HitResult } from "./HitResult";

/**
 * Performs hit testing.
 */
export class HitTester {

    public hit(
        object: GraphicObject,
        x: number,
        y: number
    ): HitResult {

        return new HitResult(

            object,

            object.contains(
                x,
                y
            )

        );

    }

}