import { collectionRepositoryInstance } from "../repository/collection.repository";

class CollectionService {
    constructor(private collectionRepository = collectionRepositoryInstance) { }

    async getCollectionPaginated(offset = 0, limit = 10) {
        return this.collectionRepository.getPaginated(offset, limit)
    }

    async getDetailedById(idCollection: number) {
        return this.collectionRepository.getDetailedById(idCollection)
    }
}

export const collectionServiceInstance = new CollectionService();
