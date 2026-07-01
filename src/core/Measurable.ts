import { Bounds } from "../geometry";

/**
 * Represents an object that has measurable bounds.
 */
export interface Measurable {

    get bounds(): Bounds;

}