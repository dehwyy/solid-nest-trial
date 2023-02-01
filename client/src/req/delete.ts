import kyFetcher from "~/req/config"

class DeleteRequest {
  async deleteCollection(id: number) {
    const response = await kyFetcher.delete(`collection?id=${id}`).json()
    return response
  }
}

export default new DeleteRequest()
