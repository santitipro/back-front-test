import { Connection } from 'mysql'

type MySqlConfig = {
  host: string
  user: string
  password: string
  database: string
}

export type MySqlConnection = Connection

export default MySqlConfig
