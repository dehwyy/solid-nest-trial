import kyFetcher from "~/req/config"

class PostRequest {
  async createCollection(theme: string) {
    const response = await kyFetcher
      .post("collection", { json: { theme } })
      // comment to fix prettier
      .json<ICreateCollectionResponse>()
    return response
  }
  async createCardAndAddToCollection({ face, backface, collectionId }: Omit<ICard, "id"> & { collectionId: string }) {
    const response = await kyFetcher
      .post(`collection/add?id=${collectionId}`, { json: { face, backface } })
      // comment to fix prettier
      .json<ICreateCollectionResponse>()
    return response
  }
}

export default new PostRequest()
