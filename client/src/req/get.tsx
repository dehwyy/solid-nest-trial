import kyFetcher from "~/req/config"

class GetRequest {
  async getCollection(id: string) {
    const response = await kyFetcher.get(`collection?id=${id}`).json<ICollection>()
    return response
  }
  async getAllCollections() {
    const response = await kyFetcher.get("collection/all").json<ICards[]>()
    response.sort((x, y) => y.id - x.id)
    return response
  }
}

export default new GetRequest()
