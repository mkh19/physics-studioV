/**
 * Defines the visual appearance of a graphic object.
 */
export class Style {

    private static readonly DEFAULT_FILL = "#FFFFFF";

    private static readonly DEFAULT_STROKE = "#000000";

    private static readonly DEFAULT_LINE_WIDTH = 1;

    private static readonly DEFAULT_OPACITY = 1;

    private _fill = Style.DEFAULT_FILL;

    private _stroke = Style.DEFAULT_STROKE;

    private _lineWidth = Style.DEFAULT_LINE_WIDTH;

    private _opacity = Style.DEFAULT_OPACITY;

    public get fill(): string {

        return this._fill;

    }

    public set fill(
        value: string
    ) {

        this._fill = value;

    }

    public get stroke(): string {

        return this._stroke;

    }

    public set stroke(
        value: string
    ) {

        this._stroke = value;

    }

    public get lineWidth(): number {

        return this._lineWidth;

    }

    public set lineWidth(
        value: number
    ) {

        this._lineWidth = Math.max(
            0,
            value
        );

    }

    public get opacity(): number {

        return this._opacity;

    }

    public set opacity(
        value: number
    ) {

        this._opacity = Math.min(
            1,
            Math.max(0, value)
        );

    }

    public reset(): void {

        this._fill = Style.DEFAULT_FILL;

        this._stroke = Style.DEFAULT_STROKE;

        this._lineWidth = Style.DEFAULT_LINE_WIDTH;

        this._opacity = Style.DEFAULT_OPACITY;

    }

    public copyFrom(
        other: Style
    ): void {

        this.fill = other.fill;

        this.stroke = other.stroke;

        this.lineWidth = other.lineWidth;

        this.opacity = other.opacity;

    }

    public clone(): Style {

        const style = new Style();

        style.copyFrom(this);

        return style;

    }

    public equals(
        other: Style
    ): boolean {

        return (

            this.fill === other.fill &&
            this.stroke === other.stroke &&
            this.lineWidth === other.lineWidth &&
            this.opacity === other.opacity

        );

    }

}