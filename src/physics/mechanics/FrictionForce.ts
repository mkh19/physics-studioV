import { Force } from "./Force";
import { ForceDirection } from "./ForceDirection";

/**
 * Represents the friction force.
 */
export class FrictionForce extends Force {


constructor(
    magnitude: number = 0
) {

    super(
        magnitude,
        "Ff"
    );

    this.direction =
        ForceDirection.Left;

}

}