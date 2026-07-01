/**
 * Represents corner radii.
 */
export class CornerRadius {

    constructor(

        public topLeft = 0,

        public topRight = 0,

        public bottomRight = 0,

        public bottomLeft = 0

    ) {}

    public static uniform(
        value: number
    ): CornerRadius {

        return new CornerRadius(

            value,

            value,

            value,

            value

        );

    }

}