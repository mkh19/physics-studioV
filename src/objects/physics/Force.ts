import { LabeledArrow } from "../base";

export class Force extends LabeledArrow {

    constructor(
        text: string = "F"
    ) {

        super(text);

        this.setColor("#D32F2F");

    }

}