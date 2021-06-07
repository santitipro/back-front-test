import { instance, mock, reset, verify, when, anyNumber } from 'ts-mockito'
import { GetPropertiesRequest } from '~/modules/properties/application/GetPropertiesRequest'
import { GetPropertiesResponse } from '~/modules/properties/application/GetPropertiesResponse'

import { GetPropertiesUseCase } from '~/modules/properties/application/GetPropertiesUseCase'
import { Property } from '~/modules/properties/domain/Property'
import { PropertyRepository } from '~/modules/properties/domain/PropertyRepository'

describe('Test GetPropertiesUseCase', () => {
  const mockPropertyRepository = mock<PropertyRepository>()

  afterEach(() => {
    reset(mockPropertyRepository)
  })

  test('should success invoke getAll properties', async () => {
    const mockProperties = [
      { id: '', title: '', link: '', address: '', city: '', images: [''] }
    ] as Property[]
    const expectedRequest = { start: 0, limit: 10 } as GetPropertiesRequest
    const expectedResponse = {
      properties: [{ address: '', city: '', id: '', image: '', link: '', title: '' }]
    } as GetPropertiesResponse
    const propertyRepository = instance(mockPropertyRepository)

    when(mockPropertyRepository.getAll(anyNumber(), anyNumber())).thenResolve(mockProperties)

    const getPropertiesUseCase = new GetPropertiesUseCase(propertyRepository)
    const result = await getPropertiesUseCase.execute(expectedRequest)

    verify(mockPropertyRepository.getAll(expectedRequest.start, expectedRequest.limit)).once()
    expect(result).toEqual(expectedResponse)
  })
})
