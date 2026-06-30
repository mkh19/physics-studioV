import {
    Group,
    Rectangle,
    TextObject
} from "../../graphics";

export class Mass extends Group {

    private readonly body: Rectangle;

    private readonly label: TextObject;

    constructor(
        value: number,
        unit: string = "kg"
    ) {

        super();

        this.body = new Rectangle(
            90,
            60
        );

        this.body.fill = "#ECEFF1";
        this.body.stroke = "#455A64";
        this.body.lineWidth = 2;

        this.label = new TextObject(
            `${value} ${unit}`
        );

        this.label.fontSize = 20;
        this.label.color = "#263238";

        /*
         * مؤقتاً نستخدم قيماً ثابتة.
         * لاحقاً سيصبح لدينا Layout Engine
         * يقوم بتوسيط النص تلقائياً.
         */

        this.label.position.set(
            this.body.width * 0.22,
            this.body.height * 0.58
        );

        this.add(this.body);
        this.add(this.label);

    }

}