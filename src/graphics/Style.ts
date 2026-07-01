/**
 * Defines the visual appearance of a graphic object.
 */
export class Style {

    private static readonly DEFAULT_FILL = "#FFFFFF";

    private static readonly DEFAULT_STROKE = "#000000";

    private static readonly DEFAULT_LINE_WIDTH = 1;
    private readonly _style =
    new Style();
    private _opacity = 1;
    private _fill = Style.DEFAULT_FILL;
    
    private _stroke = Style.DEFAULT_STROKE;
    
    private _lineWidth =
    Style.DEFAULT_LINE_WIDTH;
    
    
    
    // private _lineWidth = 1;
    
    public get opacity(): number
    public get fill(): string {

        return this._fill;

    }
    public get style(): Style {

    return this._style;

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

    public reset(): void {

        this.fill = "#FFFFFF";

        this.stroke = "#000000";

        this.lineWidth = 1;

    }

    // public clone(): Style {

    //     const style = new Style();

    //     style.fill = this.fill;
    //     style.stroke = this.stroke;
    //     style.lineWidth = this.lineWidth;

    //     return style;

    // }

    public copyFrom(
    other: Style
): void {

    this.fill = other.fill;

    this.stroke = other.stroke;

    this.lineWidth = other.lineWidth;

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

        this.lineWidth === other.lineWidth

    );

}

}