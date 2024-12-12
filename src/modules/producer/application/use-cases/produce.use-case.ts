import { KafkaBroker } from "../../../../common/infrastructure/kafka/kafka-broker";
import { Message } from "../../../../common/domain/message.dto";
import { Producer } from "../../infrastructure/kafka/schemas/producer";

export class ProduceUseCase {
    public handle = async (message: Message) => {
        await KafkaBroker.producer.connect();
        const producerRecord = new Producer(message.topic, message.message);
        await KafkaBroker.producer.send(producerRecord);
    }
}