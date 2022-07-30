import { response } from "express";
import { ICollectionDetailed, ICollectionPaginate } from "model/collection.model";
import { QueryResult } from "pg";
import poolInstance from "../db/pool";

class CollecionRepository {
    constructor(private pool = poolInstance) { }

    async getPaginated(offset: number | null = null, limit: number | null = null) {
        const res: QueryResult<ICollectionPaginate> = await this.pool.query(`SELECT * FROM list_collections_paginated(${offset},${limit});`);
        return res.rows
    }

    async getDetailedById(idCollection: number) {
        const { rows }: QueryResult<ICollectionDetailed> = await this.pool.query(`SELECT * FROM list_collection_detailed_x_id(${idCollection});`);
        return rows[0]
    }
}

export const collecionRepository = new CollecionRepository();

// (async () => {
//     const repo = new CollecionRepository()

//     const data = await repo.getDetailedById(1)
//     console.log(data);
// })()