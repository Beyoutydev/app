import { BASE_API_URL } from "src/config/endpoints";


const manageResponse = async (response: Response) => {
  if (!response.ok) {
    throw await response.json();
    
  }
  return response.json();
};

interface IHeaders {
  [key: string]: string;
}

class HttpService {
  headers: IHeaders = { 'Content-Type': 'application/json' };

  setGlobalHeaders(headers: IHeaders) {
    this.headers = { ...this.headers, ...headers };
  }

  setTokenAuthorizationHeader = () => {
    const token: string = localStorage.getItem('token') as string;
    if (token) {
      this.setGlobalHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  }

  async get<T>(endpoint: string, params?: any, headers = {}): Promise<T | any> {
    this.setTokenAuthorizationHeader();
    const urlParams = params
      ? ('?' + new URLSearchParams(params))
      : ''
    const url = `${BASE_API_URL}${endpoint}${urlParams}`
    const response = await fetch(url, {
      headers: {
        ...this.headers,
        ...headers,
      }
    });

    return manageResponse(response);
  }

  async post<T>(endpoint: string, data = {}, headers = {}): Promise<T | any> {
    this.setTokenAuthorizationHeader();

    const response = await fetch(`${BASE_API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        ...this.headers,
        ...headers,
      },
      body: JSON.stringify(data),
    });

    return manageResponse(response);
  }

  async put<T>(endpoint: string, data = {}, headers = {}): Promise<T | any> {
    this.setTokenAuthorizationHeader();

    const response = await fetch(`${BASE_API_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        ...this.headers,
        ...headers,
      },
      body: JSON.stringify(data),
    });

    return manageResponse(response);
  }

  async patch<T>(endpoint: string, data = {}, headers = {}): Promise<T | any> {
    this.setTokenAuthorizationHeader();

    const response = await fetch(`${BASE_API_URL}${endpoint}`, {
      method: 'PATCH',
      headers: {
        ...this.headers,
        ...headers,
      },
      body: JSON.stringify({data}),
    });

    return manageResponse(response);
  }

  async delete<T>(endpoint: string, data = {}, headers = {}): Promise<T | any> {
    this.setTokenAuthorizationHeader();

    const response = await fetch(`${BASE_API_URL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        ...this.headers,
        ...headers,
      },
      body: JSON.stringify(data),
    });

    return manageResponse(response);
  }
}

export const httpService = new HttpService();
