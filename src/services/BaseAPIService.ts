import { httpService } from "./HttpService";

interface IBaseAPIResponse<T> {
  message: string,
  data: T
}

export class BaseAPIService<T> {
  collection: string;

  constructor(
    collection: string, 
  ) {
    this.collection = collection;
  }

  getAll(params = {}): Promise<IBaseAPIResponse<T[]>> {
    return httpService.get<IBaseAPIResponse<T[]>>(`${this.collection}`, params);
  }

  getById(id: string, params = {}): Promise<IBaseAPIResponse<T>> {
    return httpService.get<IBaseAPIResponse<T>>(`${this.collection}/${id}`, params);
  }

  save(entity: T): Promise<IBaseAPIResponse<T>> {
    return httpService.post<IBaseAPIResponse<T>>(`${this.collection}`, { data: entity });
  }

  update(entity: Partial<T & {_id?: string}>): Promise<IBaseAPIResponse<T>> {
    return httpService.patch<IBaseAPIResponse<T>>(
      `${this.collection}/${entity._id}`,
      { id: entity._id, data: entity },
    );
  }

  put(entity: T & {_id?: string}): Promise<IBaseAPIResponse<T>> {
    return httpService.put<IBaseAPIResponse<T>>(
      `${this.collection}/${entity._id}`,
      { id: entity._id, data: entity }
    );
  }

  delete(id: string): Promise<void> {
    return httpService.delete(`${this.collection}/${id}`);
  }
}
