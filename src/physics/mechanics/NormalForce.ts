import { Force } from "./Force";
import { ForceDirection } from "./ForceDirection";

/**
 * Represents the normal force.
 */
export class NormalForce extends Force {

    constructor(
    magnitude: number = 0
) {

    super(
        magnitude,
        "N"
    );

    this.direction =
        ForceDirection.Up;

}

}