import { inject, injectable } from 'inversify'
import { UseCase } from '~/shared/application/UseCase'
import { PropertyRepository } from '../domain/PropertyRepository'
import { GetPropertiesRequest } from './GetPropertiesRequest'
import { GetPropertiesResponse } from './GetPropertiesResponse'

@injectable()
export class GetPropertiesUseCase implements UseCase<GetPropertiesRequest, GetPropertiesResponse> {
  private repository: PropertyRepository

  constructor(@inject('PropertyRepository') propertyRepository: PropertyRepository) {
    this.repository = propertyRepository
  }

  async execute(request: GetPropertiesRequest): Promise<GetPropertiesResponse> {
    const properties = await this.repository.getAll(request.start, request.limit)

    return new GetPropertiesResponse(properties)
  }
}
