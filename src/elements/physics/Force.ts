import {
    Arrow,
    Group,
    TextObject
} from "../../graphics";

export class Force extends Group {

    private readonly arrow: Arrow;

    private readonly label: TextObject;

    constructor(
        text: string = "F"
    ) {

        super();

        this.arrow = new Arrow(120);

        this.arrow.setColor("#D32F2F");

        this.arrow.setLineWidth(3);

        this.label = new TextObject(text);

        this.label.fontSize = 18;

        this.label.color = "#D32F2F";

        this.label.position.set(
            this.arrow.length + 12,
            5
        );

        this.add(this.arrow);

        this.add(this.label);

    }

}