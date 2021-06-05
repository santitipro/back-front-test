import { instance, mock, reset, verify, when, anyNumber } from "ts-mockito";
import { GetPropertiesRequest } from '../../../../src/modules/properties/application/GetPropertiesRequest';
import { GetPropertiesResponse } from '../../../../src/modules/properties/application/GetPropertiesResponse';

import { GetPropertiesUseCase } from '../../../../src/modules/properties/application/GetPropertiesUseCase'
import { Property } from "../../../../src/modules/properties/domain/Property";
import { PropertyRepository } from "../../../../src/modules/properties/domain/PropertyRepository";

describe('Test GetPropertiesUseCase', () => {
  const mockPropertyRepository = mock<PropertyRepository>();

  afterEach(() => {
    reset(mockPropertyRepository);
  });

  test('should success invoke getAll properties', async () => {
    const mockProperties = [{id: '', title: '', link: '', address: '', city: '', images: ['']}] as Property[]
    const expectedRequest = { start: 0, limit: 10 } as GetPropertiesRequest;
    const expectedResponse = {"properties": [{"address": "", "city": "", "id": "", "image": "", "link": "", "title": ""}]} as GetPropertiesResponse;
    const propertyRepository = instance(mockPropertyRepository);

    when(mockPropertyRepository.getAll(anyNumber(), anyNumber())).thenResolve(mockProperties)

    const getPropertiesUseCase = new GetPropertiesUseCase(propertyRepository)
    const result = await getPropertiesUseCase.execute(expectedRequest);

    verify(mockPropertyRepository.getAll(expectedRequest.start, expectedRequest.limit)).once()
    expect(result).toEqual(expectedResponse);
  });

});
