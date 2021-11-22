import 'reflect-metadata'
import { Container } from 'inversify'
import { DBConnection } from '~/shared/infrastructure/persistence/connectionManager'
import { MySqlConnection } from '~/shared/infrastructure/persistence/mysql/mysqlConfig'
import { MySqlClient } from '~/shared/infrastructure/persistence/mysql/mysqlClient'
import { IMapper } from '~/shared/application/Mapper'
import { ClassTransformerDataMapper } from '~/shared/infrastructure/mapper'
import { LoggerRepository } from '~/modules/loggers/domain/LoggerRepository'
import { GetRealLogsController } from '~/api/controllers/logs/GetRealLogsController'
import { GetRealLogsUseCase } from '~/modules/loggers/application/useCases/GetRealLogsUseCase'
import { SaveLogsUseCase } from '~/modules/loggers/application/useCases/SaveLogsUseCase'
import { NetworkLoggerRepository } from '~/modules/loggers/infrastructure/persistence/NetworkLoggerRepository'
import { GetLogController } from '~/api/controllers/logs/GetLogController'
import { GetLogUseCase } from '~/modules/loggers/application/useCases/GetLogUseCase'
import { GetLogsUseCase } from '~/modules/loggers/application/useCases/GetLogsUseCase'
import { GetLogsController } from '~/api/controllers/logs/GetLogsController'

const container = new Container()

container.bind<IMapper>('IMapper').to(ClassTransformerDataMapper)
container.bind<DBConnection<MySqlConnection>>('DBConnection').to(MySqlClient).inSingletonScope()

// Repositories
container.bind<LoggerRepository>('LoggerRepository').to(NetworkLoggerRepository)

// UseCases
container.bind<GetLogsUseCase>('GetLogsUseCase').to(GetLogsUseCase)
container.bind<GetRealLogsUseCase>('GetRealLogsUseCase').to(GetRealLogsUseCase)
container.bind<GetLogUseCase>('GetLogUseCase').to(GetLogUseCase)
container.bind<SaveLogsUseCase>('SaveLogsUseCase').to(SaveLogsUseCase)

// Controllers
container.bind<GetLogsController>('GetLogsController').to(GetLogsController)
container.bind<GetRealLogsController>('GetRealLogsController').to(GetRealLogsController)
container.bind<GetLogController>('GetLogController').to(GetLogController)

export default container
