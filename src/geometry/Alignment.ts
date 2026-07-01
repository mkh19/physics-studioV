import { HorizontalAlignment } from "./HorizontalAlignment";
import { VerticalAlignment } from "./VerticalAlignment";

/**
 * Two-dimensional alignment.
 */
export class Alignment {

    constructor(

        public horizontal =
            HorizontalAlignment.Left,

        public vertical =
            VerticalAlignment.Top

    ) {}

}