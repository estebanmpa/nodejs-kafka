import { KafkaBroker } from "../../../../common/infrastructure/kafka/kafka-broker"

export class ConsumerListener {
    private topic: string;

    constructor(topic: string) {
        this.topic = topic;
        console.log(topic)
    }

    public subscribe = async () => {
        await KafkaBroker.consumer.connect();
        await KafkaBroker.consumer.subscribe({ topic: this.topic, fromBeginning: true });
        await KafkaBroker.consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                const value = message.value?.toString();
                console.log("Value received", value);
            },
        })
    }
}