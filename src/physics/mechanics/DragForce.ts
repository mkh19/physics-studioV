import { Force } from "./Force";

/**
 * Represents the drag (air resistance) force.
 */
export class DragForce extends Force {

    constructor(
        magnitude: number = 0
    ) {

        super(
            magnitude,
            "Fd"
        );

    }

}