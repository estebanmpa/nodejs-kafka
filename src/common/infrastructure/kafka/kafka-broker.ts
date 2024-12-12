import { Consumer, Kafka, Partitioners, Producer } from "kafkajs";

export class KafkaBroker {
    private static instance: KafkaBroker;
    private static kafka: Kafka;
    public static producer: Producer;
    public static consumer: Consumer;

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
        });
        KafkaBroker.producer = KafkaBroker.kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner });
        KafkaBroker.consumer = KafkaBroker.kafka.consumer({ groupId: "nodejs-kafka" });
    }
}