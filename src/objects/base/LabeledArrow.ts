import {
    Arrow,
    Group,
    TextObject
} from "../../graphics";

export class LabeledArrow extends Group {

    protected readonly arrow: Arrow;

    protected readonly label: TextObject;

    constructor(
        text: string,
        length: number = 120
    ) {

        super();

        this.arrow = new Arrow(length);

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

    /**
     * Changes the displayed label.
     */
    public setText(
        text: string
    ): void {

        this.label.text = text;

    }

    /**
     * Changes the arrow color.
     */
    public setColor(
        color: string
    ): void {

        this.arrow.setColor(color);

        this.label.color = color;

    }

    /**
     * Changes the arrow thickness.
     */
    public setLineWidth(
        width: number
    ): void {

        this.arrow.setLineWidth(width);

    }

}