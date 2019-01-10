import axios, { AxiosInstance, AxiosResponse } from 'axios';
import HttpHandlerResponse from './HttpHandlerResponse';

export interface IHttpHandler {
    get(url: string): Promise<HttpHandlerResponse>;
    post(url: string, data?: any, config?: any): Promise<HttpHandlerResponse>;
    delete(url: string, config?: any): Promise<HttpHandlerResponse>;
}

class HttpHandler implements IHttpHandler {
    private service: AxiosInstance;
    private baseUrl: string = 'http://localhost:5000/api';

    constructor() {
        const service = axios.create();

        this.service = service;
    }

    public get(url: string): Promise<HttpHandlerResponse> {
        return this.service.get(this.baseUrl + url).then((result: AxiosResponse) => {
            const response = new HttpHandlerResponse();

            response.data = result.data;
            response.isSuccess = result.status === 200;

            return response;
        });
    }

    public post(url: string, data?: any, config?: any): Promise<HttpHandlerResponse> {
        return this.service.post(this.baseUrl + url, data, config).then((result: AxiosResponse) => {
            const response = new HttpHandlerResponse();

            response.data = result.data;
            response.isSuccess = result.status === 200;

            return response;
        });
    }

    public delete(url: string, config?: any): Promise<HttpHandlerResponse> {
        return this.service.delete(this.baseUrl + url, config).then((result: AxiosResponse) => {
            const response = new HttpHandlerResponse();

            response.data = result.data;
            response.isSuccess = result.status === 200;

            return response;
        });
    }
}

export default HttpHandler;
