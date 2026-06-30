import {
    Group,
    Rectangle,
    TextObject
} from "../../graphics";

export class LabeledRectangle extends Group {

    protected readonly body: Rectangle;

    protected readonly label: TextObject;

    constructor(
        text: string,
        width: number = 90,
        height: number = 60
    ) {

        super();

        this.body = new Rectangle(
            width,
            height
        );

        this.body.fill = "#ECEFF1";
        this.body.stroke = "#455A64";
        this.body.lineWidth = 2;

        this.label = new TextObject(text);

        this.label.fontSize = 20;
        this.label.color = "#263238";

        // مؤقتًا حتى نبني نظام Layout
        this.label.position.set(
            width * 0.22,
            height * 0.58
        );

        this.add(this.body);
        this.add(this.label);

    }

    /**
     * Changes the displayed text.
     */
    public setText(
        text: string
    ): void {

        this.label.text = text;

    }

}