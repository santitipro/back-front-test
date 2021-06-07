import { Property } from './Property'

export interface PropertyRepository {
  getAll(start: number, limit: number): Promise<Property[]>
}
