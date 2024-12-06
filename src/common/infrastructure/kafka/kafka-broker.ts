import { Kafka } from "kafkajs";

export class KafkaBroker {
    private static instance: KafkaBroker;
    public static kafka: Kafka;

    constructor() { }

    public static getInstance = () => {
        if (!KafkaBroker.instance) {
            KafkaBroker.instance = new KafkaBroker();
        }

        return KafkaBroker.instance;
    }

    public init = () => {
        KafkaBroker.kafka = new Kafka({
            clientId: 'nodejs-kafka',
            brokers: ['localhost:9092']
        })
    }
}