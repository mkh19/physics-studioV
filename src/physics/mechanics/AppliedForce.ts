import { Force } from "./Force";
import { ForceDirection } from "./ForceDirection";

/**
 * Represents an externally applied force.
 */
export class AppliedForce extends Force {


constructor(
    magnitude: number = 0
) {

    super(
        magnitude,
        "F"
    );

    this.direction =
        ForceDirection.Right;

}

}