import { Request, Response, Router } from "express";
import { AppController } from "../../../../common/infrastructure/controllers/app-controller";
import { ProduceUseCase } from "../../application/use-cases/produce.use-case";

export class ProducerController extends AppController {
    public router = Router();
    private produceUseCase: ProduceUseCase;

    constructor(produceUseCase: ProduceUseCase) {
        super("ProducerController");
        this.produceUseCase = produceUseCase;
        this.router.post("/producer", this.create);
    }

    public create = async (req: Request, res: Response) => {
        try {
            const { body } = req;
            await this.produceUseCase.handle(body);
            res.status(200).json("Message Sent!")
        } catch (error) {
            res.status(500).json("Error!");
        }

    }
}