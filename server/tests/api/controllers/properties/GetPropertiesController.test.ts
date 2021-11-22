import { mockRequest, mockResponse } from 'mock-req-res'
import { deepEqual, instance, mock, reset, verify, when } from 'ts-mockito'

import { GetPropertiesController } from '~/api/controllers/properties/GetPropertiesController'
import { GetPropertiesResponse } from '~/modules/properties/application/useCases/getAll/GetPropertiesResponse'
import { GetPropertiesUseCase } from '~/modules/properties/application/useCases/getAll/GetPropertiesUseCase'

import { Property } from '~/modules/properties/domain/Property'

describe('Test GetPropertiesController', () => {
  const mockUseCase = mock<GetPropertiesUseCase>()

  afterEach(() => {
    reset(mockUseCase)
  })

  test('should success when not provide start and limit params', async () => {
    const mockPagination = { start: 0, limit: 10 }
    const mockProperties = [
      { id: '', title: '', link: '', address: '', city: '', images: [''] }
    ] as Property[]
    const getPropertiesUseCase = instance(mockUseCase)
    const mockUseCaseResponse = new GetPropertiesResponse(mockProperties)
    const mockRes = mockResponse({ send: jest.fn() })
    const mockReq = mockRequest()

    when(mockUseCase.execute(mockPagination)).thenResolve(mockUseCaseResponse)

    const controller = new GetPropertiesController(getPropertiesUseCase)
    await controller.run(mockReq, mockRes)

    verify(mockUseCase.execute(deepEqual(mockPagination))).once()
    expect(mockRes.send).toHaveBeenCalled()
  })

  test('should success when provide start and limit params', async () => {
    const mockPagination = { start: 0, limit: 20 }
    const mockProperties = [
      { id: '', title: '', link: '', address: '', city: '', images: [''] }
    ] as Property[]
    const getPropertiesUseCase = instance(mockUseCase)
    const mockUseCaseResponse = new GetPropertiesResponse(mockProperties)
    const mockRes = mockResponse({ send: jest.fn() })
    const mockReq = mockRequest({ query: { ...mockPagination } })

    when(mockUseCase.execute(mockPagination)).thenResolve(mockUseCaseResponse)

    const controller = new GetPropertiesController(getPropertiesUseCase)
    await controller.run(mockReq, mockRes)

    verify(mockUseCase.execute(deepEqual(mockPagination))).once()
    expect(mockRes.send).toHaveBeenCalled()
  })

  // TODO: Do a test checking bad path
})
