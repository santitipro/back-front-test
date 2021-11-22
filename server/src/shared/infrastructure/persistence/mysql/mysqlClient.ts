import { injectable } from 'inversify'
import { createConnection } from 'mysql'
import { DBConnection } from '../connectionManager'
import MySqlConfig, { MySqlConnection } from './mysqlConfig'

@injectable()
export class MySqlClient implements DBConnection<MySqlConnection> {
  private _client: MySqlConnection

  constructor() {
    const config: MySqlConfig = {
      host: 'localhost',
      user: 'root',
      password: 'Test1234',
      database: 'tfg_pablo'
    }
    this._client = createConnection(config)
  }

  connect(): void {
    this.client().connect()
  }

  destroy(): void {
    this.client().destroy()
  }

  client(): MySqlConnection {
    return this._client
  }
}
