import { LabeledRectangle } from "../base";

export class Mass extends LabeledRectangle {

    constructor(
        value: number,
        unit: string = "kg"
    ) {

        super(
            `${value} ${unit}`
        );

    }

}