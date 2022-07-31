import { pageRepositoryInstance } from "../repository/page.repository";


class PageService {
    constructor(private pageRepository = pageRepositoryInstance) { }

    async listByIdCollectionAndVolumenNumber(id_collection: number, volumen_number: number, offset: number | null = null, limit: number | null = null) {
        return await this.pageRepository.listByIdCollectionAndVolumenNumber(id_collection, volumen_number, offset, limit)
    }
}

export const pageSErvice = new PageService();

// (async () => {
//     const repo = new PageService()
//     const data = await repo.listByIdCollectionAndVolumenNumber(1, 1)
//     console.log(data.rowCount);
// })();