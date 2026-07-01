import { MouseState } from "./MouseState";

/**
 * Handles canvas mouse input.
 */
export class CanvasInput {

    private readonly _mouse =
        new MouseState();

    public constructor(
        canvas: HTMLCanvasElement
    ) {

        canvas.addEventListener(
            "mousemove",
            event => {

                this._mouse.move(
                    event.offsetX,
                    event.offsetY
                );

            }
        );

        canvas.addEventListener(
            "mousedown",
            () => {

                this._mouse.pressLeft();

            }
        );

        canvas.addEventListener(
            "mouseup",
            () => {

                this._mouse.releaseLeft();

            }
        );

    }

    public get mouse(): MouseState {

        return this._mouse;

    }

}