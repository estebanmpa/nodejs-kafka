import { Partitioners } from "kafkajs";
import { KafkaBroker } from "../../../../common/infrastructure/kafka/kafka-broker";
import { Message } from "../../domain/message.dto";
import { Producer } from "../../../../common/infrastructure/kafka/producer.dto";

export class ProduceUseCase {
    public handle = async (message: Message) => {
        const producer = KafkaBroker.kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner });
        await producer.connect();
        const producerRecord = new Producer(message.topic, message.message);
        await producer.send(producerRecord);
    }
}