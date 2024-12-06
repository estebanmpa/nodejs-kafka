import express, { Application } from 'express';
import { KafkaBroker } from './common/infrastructure/kafka/kafka-broker';
import { ControllerFactory } from './common/infrastructure/controllers/controller.factory';
import { ProducerController } from './modules/producer/infrastructure/controllers/producer.controller';

export default class App {
    public app: Application;
    private port: number = 3000;
    private controllers = [
        ProducerController
    ];

    constructor() {
        this.app = express();
    }

    public start = () => {
        // Middleware to parse JSON body
        this.app.use(express.json());

        // Middleware to parse URL-encoded body (for form submissions)
        this.app.use(express.urlencoded({ extended: true }));

        this.initializeControllers(this.controllers);
        this.initializeBroker();
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        })
    }

    private initializeControllers = (controllers: any[]) => {
        const factory = new ControllerFactory();
        controllers.forEach((controller) => {
            const instance = factory.createController(controller);
            this.app.use('/api', instance.router);
        });
    }

    private initializeBroker = () => {
        KafkaBroker.getInstance().init();
    }
}