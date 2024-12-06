export class Message {
    topic: string;
    value: any;

    constructor(value: any) {
        this.topic = "";
        this.value = value;
    }
}