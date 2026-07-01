import { Force } from "./Force";

/**
 * Represents the spring restoring force.
 */
export class SpringForce extends Force {

    constructor(
        magnitude: number = 0
    ) {

        super(
            magnitude,
            "Fs"
        );

    }

}