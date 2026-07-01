import { Force } from "./Force";

/**
 * Represents the thrust force.
 */
export class ThrustForce extends Force {

    constructor(
        magnitude: number = 0
    ) {

        super(
            magnitude,
            "Ft"
        );

    }

}