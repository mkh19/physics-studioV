import { GraphicObject } from "../core";

/**
 * Represents the result of a hit test.
 */
export class HitResult {

    constructor(

        public readonly object: GraphicObject | null,

        public readonly hit: boolean

    ) {

    }

}