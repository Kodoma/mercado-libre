import request from 'supertest'
import nock from 'nock';
import App from '../app';
import {API_TEST_BASE_PATH} from "./fixtures/test-constants.fixtures";
import * as connectorFixtures from "./fixtures/connectors/item.fixture"

let app: App;

afterAll( async() => {
  await new Promise<void>( resolve => setTimeout(() => resolve(), 500))
})

beforeAll( async() => {
  return new App()
    .bootstrap()
    .then((a) => app = a);
})

describe('Testing Meli Server Middle-End', () => {

  describe('[Get] test /api/items/?search=search', () => {
    const itemsListResponse = connectorFixtures.buildItemsListResponse();

    it('[GET] Get 200  with valid search query', () => {
      const itemsSearch = 'iphone';

      nock(API_TEST_BASE_PATH)
        .get(`/items?search=${itemsSearch}`)
        .reply(200, itemsListResponse)

      return request(app.getServer())
        .get(`/api/items?search=${itemsSearch}`)
        .expect(200)
        .then((response) => {
          expect(response.body.items.length).toBeGreaterThan(0)
        })
    });

    it('[GET] Get 0 results with invalid valid search query', () => {
      const itemsSearch = 'dummySearchText';

      nock(API_TEST_BASE_PATH)
        .get(`/items?search=${itemsSearch}`)
        .reply(200, itemsListResponse)

      return request(app.getServer())
        .get(`/api/items?search=${itemsSearch}`)
        .expect(200)
        .then((response) => {
          expect(response.body.items.length).toEqual(0)
        })
    });

  });

  describe('[Get] test /api/items/[itemId]', () => {
    const itemResponse = connectorFixtures.buildItemResponse()

    it('[GET] Get 200  with valid item id', () => {
      const itemId = 'MLA922358125';

      nock(API_TEST_BASE_PATH)
        .get(`/items/${itemId}`)
        .reply(200, itemResponse)

      return request(app.getServer())
        .get(`/api/items/${itemId}`)
        .expect(200)
        .then((response) => {
          expect(response.body.item.id).toEqual(itemResponse.id)
        })
    });

    it('[GET] Get 500 response with invalid item id', () => {
      const itemId = 'itemId';

      nock(API_TEST_BASE_PATH)
        .get(`/api/items/${itemId}`)
        .reply(200, itemResponse)

      return request(app.getServer())
        .get(`/api/items/${itemId}`)
        .expect(500)
    });
  });

})
