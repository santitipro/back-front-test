import { Application, Request, Response } from 'express'
import container from '~/config/di'
import { Controller } from '../controllers/Controller'
import { GetLogController } from '../controllers/logs/GetLogController'
import { GetLogsController } from '../controllers/logs/GetLogsController'
import { GetRealLogsController } from '../controllers/logs/GetRealLogsController'

export function registerRoutes(app: Application): void {
  const getLogsController: Controller = container.get<GetLogsController>('GetLogsController')
  app.get('/logs', (req: Request, res: Response) => getLogsController.run(req, res))

  const getRealLogsController: Controller =
    container.get<GetRealLogsController>('GetRealLogsController')
  app.get('/real_logs', (req: Request, res: Response) => getRealLogsController.run(req, res))

  const getLogController: Controller = container.get<GetLogController>('GetLogController')
  app.get('/log/:id', (req: Request, res: Response) => getLogController.run(req, res))
}
