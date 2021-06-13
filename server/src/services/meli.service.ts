import {meliClient, MeliConnector} from "../connectors/meli.connector";
import {meliItemsConverter, MeliItemsConverter} from "../converters/meli.items.converter";
import {MeliItemResponse, MeliSearchResponse} from "../models/meli.models";

class MeliServiceImpl implements MeliService {
  constructor(
    private meliConnector: MeliConnector,
    private meliConverter: MeliItemsConverter
  ) {}

  async getItems(search: string): Promise<MeliSearchResponse> {
    const response = await this.meliConnector.getItems(search);
    return this.meliConverter.convertSearchResponse(response);
  }

  async getItemById(id: string): Promise<MeliItemResponse> {
    const response = await this.meliConnector.getItemById(id);
    return await this.meliConverter.convertItemResponse(response);
  }
}

export interface MeliService {
  getItems: (search: string) => Promise<MeliSearchResponse>
  getItemById: (id: string) => Promise<MeliItemResponse>
}

export const meliService = new MeliServiceImpl(
  meliClient,
  meliItemsConverter
)
