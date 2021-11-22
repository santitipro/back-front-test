type JSONData = { [key: string]: any }

export type AConstructorTypeOf<T> = new (...args: any[]) => T

export interface IMapper {
  map<T>(model: AConstructorTypeOf<T>, data: JSONData): T
}
