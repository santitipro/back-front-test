import { Application } from 'express'
import container from '~/config/di'
import { Controller } from '../controllers/Controller'
import { GetPropertiesController } from '../controllers/properties/GetPropertiesController'

export function registerRoutes(app: Application): void {
  // Separate this in routes files
  const controller: Controller = container.get<GetPropertiesController>('GetPropertiesController')
  app.get('/properties', (req, res) => controller.run(req, res))
}
