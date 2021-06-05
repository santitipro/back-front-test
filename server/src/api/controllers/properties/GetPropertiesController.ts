import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { GetPropertiesUseCase } from "~/modules/properties/application/GetPropertiesUseCase";
import { Controller } from "../Controller";
//

@injectable()
export class GetPropertiesController implements Controller {
  private getPropertiesUseCase: GetPropertiesUseCase;

  constructor(@inject("GetPropertiesUseCase") useCase: GetPropertiesUseCase) {
    this.getPropertiesUseCase = useCase;
  }

  async run(req: Request, res: Response) {
    try {
      // Put here for example middy validator for ensure start and limit has number
      const { start, limit } = req.query
      const s = start ? Number(start) : 0;
      const l = limit ? Number(limit) : 10;
      if (isNaN(s) || isNaN(l)) {
        res.status(400).send({ error: 'Invalid params' });
      }
      const properties = await this.getPropertiesUseCase.execute({start:s, limit: l});
      res.send(properties);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
}
