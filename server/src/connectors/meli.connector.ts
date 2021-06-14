import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { MeliSearchResponse, MeliItemResponse, ItemDescription } from './models/';

class MeliConnectorImpl implements MeliConnector {
  private readonly httpConnector: AxiosInstance;
  private MELI_API_BASE = 'https://api.mercadolibre.com/';
  private MELI_API_TIMEOUT = 2000;

  constructor() {
    this.httpConnector = Axios.create({
      baseURL: this.MELI_API_BASE,
    });
  }

  public async getItems(search: string): Promise<MeliSearchResponse> {
    const value: AxiosResponse = await this.httpConnector.get('/sites/MLA/search', {
      params: { q: search },
      timeout: this.MELI_API_TIMEOUT,
    });
    return value.data;
  }

  public async getItemById(id: string): Promise<MeliItemResponse> {
    const value: AxiosResponse = await this.httpConnector.get(`/items/${id}`, {
      timeout: this.MELI_API_TIMEOUT,
    });
    return value.data;
  }

  public async getItemDescriptionById(id: string): Promise<ItemDescription> {
    let apiRes = null;
    try {
      apiRes = await this.httpConnector.get(`/items/${id}/description`, {
        timeout: this.MELI_API_TIMEOUT,
      });
    } catch (e) {
      apiRes = e.response;
    } finally {
      return apiRes.data;
    }
  }
}

export interface MeliConnector {
  getItems: (search: string) => Promise<MeliSearchResponse>;
  getItemById: (id: string) => Promise<MeliItemResponse>;
}

export const meliClient = new MeliConnectorImpl();
