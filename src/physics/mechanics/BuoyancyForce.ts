import { Force } from "./Force";

/**
 * Represents the buoyancy force.
 */
export class BuoyancyForce extends Force {

    constructor(
        magnitude: number = 0
    ) {

        super(
            magnitude,
            "Fb"
        );

    }

}