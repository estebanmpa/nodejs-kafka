import { ProduceUseCase } from "../../../modules/producer/application/use-cases/produce.use-case";
import { ProducerController } from "../../../modules/producer/infrastructure/controllers/producer.controller";
import { AppController } from "./app-controller";


export class ControllerFactory {
    public createController = (controller: AppController) => {
        switch (controller.name) {
            case "ProducerController":
                return new ProducerController(new ProduceUseCase());
            case "ProducerController":
                return new ProducerController(new ProduceUseCase());
            default:
                throw new Error("Unrecongnized Type!");
        }
    }
}