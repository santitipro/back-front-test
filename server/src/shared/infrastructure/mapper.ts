import { plainToClass } from 'class-transformer'
import { injectable } from 'inversify'
import { AConstructorTypeOf, IMapper } from '../application/Mapper'

@injectable()
export class ClassTransformerDataMapper implements IMapper {
  map<T>(model: AConstructorTypeOf<T>, data: { [key: string]: any }): T {
    const mapped = plainToClass(model, data)
    return mapped
  }
}
