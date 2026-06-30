import { Group } from "../graphics";

export class Document extends Group {

    constructor(
        public readonly title = "Untitled Document"
    ) {

        super();

    }

}