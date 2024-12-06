import { Message } from "./message";

export class Producer {
    topic: string;
    messages: Message[];

    constructor(topic: string, message: any) {
        this.topic = topic;
        this.messages = [new Message(message)];
    }
}