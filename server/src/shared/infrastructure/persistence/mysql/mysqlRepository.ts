import { inject, injectable } from 'inversify'
import { Query } from 'mysql'
// import { promisify } from 'util'
import { DBConnection } from '../connectionManager'
import { MySqlConnection } from './mysqlConfig'

type Options = {
  [key: string]: any
}

@injectable()
export abstract class MySqlRepository {
  @inject('DBConnection')
  private dbConnection: DBConnection<MySqlConnection>

  abstract tableName(): string

  public query(query: string, options?: Options): Promise<Array<Query>> {
    return new Promise((resolve, reject) => {
      this.dbConnection.client().query(query, options, function (error, results) {
        if (error) {
          reject(error)
        }
        resolve(results)
      })
    })
  }
}
