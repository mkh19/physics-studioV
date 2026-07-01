import { Force } from "./Force";
import { ForceDirection } from "./ForceDirection";
/**
 * Represents the weight force.
 */
export class Weight extends Force {

    constructor(
    magnitude: number = 0
) {

    super(
        magnitude,
        "W"
    );

    this.direction =
        ForceDirection.Down;

}

}