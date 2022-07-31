import { IPageContent } from "model/page.model";
import { QueryResult } from "pg";
import poolInstance from "../db/pool";
class PageRepository {
    constructor(private pool = poolInstance) { }

    async listByIdCollectionAndVolumenNumber(id_collection: number, volumen_number: number, offset: number | null = null, limit: number | null = null) {
        const { rows }: QueryResult<IPageContent> = await this.pool.query(`SELECT * FROM list_pages_x_id_collection_and_volumen_number($1,$2,$3,$4)`, [id_collection, volumen_number, offset, limit])
        return rows
    }
}

export const pageRepositoryInstance = new PageRepository();

// (async () => {
//     const repo = new PageRepository()
//     const data = await repo.listByIdCollectionAndVolumenNumber(1, 1)
//     console.log(data);
// })();