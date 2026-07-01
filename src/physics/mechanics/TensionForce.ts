import { Force } from "./Force";

/**
 * Represents the tension force.
 */
export class TensionForce extends Force {

    constructor(
        magnitude: number = 0
    ) {

        super(
            magnitude,
            "T"
        );

    }

}