import * as connector from '../connectors/models/';
import { Item, MeliItemResponse, MeliSearchResponse, Pictures } from '../models/meli.models';
import { Attribute } from '../connectors/models/';
import { meliClient } from '../connectors/meli.connector';

export interface MeliItemsConverter {
  convertSearchResponse: (response: connector.MeliSearchResponse) => MeliSearchResponse;
  convertItemResponse: (itemResponse: connector.MeliItemResponse) => Promise<MeliItemResponse>;
}

class MeliItemsConverterImpl implements MeliItemsConverter {
  public convertSearchResponse(response: connector.MeliSearchResponse): MeliSearchResponse {
    return {
      author: this.convertAuthor(),
      categories: this.convertCategories(response.filters),
      items: this.convertItems(response.results),
    };
  }

  public async convertItemResponse(itemResponse: connector.MeliItemResponse): Promise<MeliItemResponse> {
    return {
      author: this.convertAuthor(),
      item: await this.convertItem(itemResponse),
    };
  }

  private convertAuthor() {
    return {
      name: 'German',
      lastname: 'Caceres',
    };
  }

  private convertCategories(filters: connector.Filter[]): string[] {
    const categoriesResult = [];
    const category = filters.find(element => element.id === 'category');
    const withOutCategory = filters.filter(e => e.id !== 'category');

    category &&
      category.values.map(e => {
        e.path_from_root.map(c => {
          categoriesResult.push(c.name);
        });
      });

    withOutCategory.map(e => {
      e.values.map(v => {
        categoriesResult.push(v.name);
      });
    });
    return categoriesResult;
  }

  private async convertItem(ItemResult: connector.MeliItemResponse): Promise<Item> {
    const description = await this.convertItemDescription(ItemResult.id);
    return {
      id: ItemResult.id,
      title: ItemResult.title,
      price: {
        currency: ItemResult.currency_id,
        amount: ItemResult.price,
      },
      thumbnail: ItemResult.thumbnail,
      pictures: this.convertImages(ItemResult.pictures),
      condition: this.convertCondition(ItemResult.attributes),
      free_shipping: ItemResult.shipping.free_shipping,
      sold_quantity: ItemResult.sold_quantity && ItemResult.sold_quantity,
      description: description.plain_text ? description.plain_text : '',
    };
  }

  private convertImages(pictures: connector.Picture[]): Pictures[] {
    if (!pictures) return;
    const result: Pictures[] = [];

    pictures.map(p =>
      result.push({
        src: p.secure_url,
      }),
    );

    return result;
  }

  private convertItemDescription = async (id: string): Promise<connector.ItemDescription> => {
    return await meliClient.getItemDescriptionById(id);
  };

  private convertItems(results: connector.MeliItemResponse[]): Item[] {
    const ItemsResult: Item[] = [];
    if (!results) return;

    results.map(r =>
      ItemsResult.push({
        id: r.id,
        title: r.title,
        price: {
          currency: r.currency_id,
          amount: r.price,
        },
        thumbnail: r.thumbnail,
        pictures: this.convertImages(r.pictures),
        condition: this.convertCondition(r.attributes),
        free_shipping: r.shipping.free_shipping,
      }),
    );
    return ItemsResult;
  }

  private convertCondition(attributes: Attribute[]): string {
    return attributes.find(element => element.id === 'ITEM_CONDITION').value_name;
  }
}

export const meliItemsConverter = new MeliItemsConverterImpl();
