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
    const response = await fetch(this.buildUrl(endpoint, params), {
      headers: {
        ...this.headers,
        ...headers,
      }
    });

    return manageResponse(response);
  }

  async post<T>(endpoint: string, data = {}, headers = {}, params = {}): Promise<T | any> {
    this.setTokenAuthorizationHeader();
    const response = await fetch(this.buildUrl(endpoint, params), {
      method: 'POST',
      headers: {
        ...this.headers,
        ...headers,
      },
      body: JSON.stringify(data),
    });

    return manageResponse(response);
  }

  async put<T>(endpoint: string, data = {}, headers = {}, params = {}): Promise<T | any> {
    this.setTokenAuthorizationHeader();
    const response = await fetch(this.buildUrl(endpoint, params), {
      method: 'PUT',
      headers: {
        ...this.headers,
        ...headers,
      },
      body: JSON.stringify(data),
    });

    return manageResponse(response);
  }

  async patch<T>(endpoint: string, data = {}, headers = {}, params = {}): Promise<T | any> {
    this.setTokenAuthorizationHeader();
    const response = await fetch(this.buildUrl(endpoint, params), {
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

  private buildUrl (endpoint: string, params = {}): string {
    const queryParams = params && Object.keys(params).length > 0
      ? ('?' + new URLSearchParams(params))
      : ''
    return `${BASE_API_URL}/${endpoint}${queryParams}`;
  };
}

export const httpService = new HttpService();
