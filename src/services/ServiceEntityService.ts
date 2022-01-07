import { asyncFunctionHandler } from 'src/adapters/asyncFunctionHandler';
import { SERVICE_URL } from "src/config/endpoints";
import { Service } from 'src/domain/types';
import { ICreateServiceDto } from 'src/types';
import { BaseAPIService } from './BaseAPIService';
import { httpService } from "./HttpService";

class ServiceEntityService extends BaseAPIService<Service> {
  async create(createServiceInput: ICreateServiceDto): Promise<Service | undefined> {
    const createFn = async (): Promise<Service> => {
      return (await httpService.post(
        SERVICE_URL.SINGLE, 
        {...createServiceInput}
      )).data;
    }
    return await asyncFunctionHandler(createFn);
  }
}

export const serviceEntityService = new ServiceEntityService('services');
