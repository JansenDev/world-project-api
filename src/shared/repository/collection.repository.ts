import { response } from "express";
import { ICollectionDetailed, ICollectionPaginate } from "model/collection.model";
import { IPaginated } from "model/paginated.model";
import { QueryResult } from "pg";
import poolInstance from "../db/pool";

class CollecionRepository {
    constructor(private pool = poolInstance) { }

    async getPaginated( offset: number | null = null,limit: number | null = null) {
        const res: QueryResult<ICollectionPaginate> = await this.pool.query(`SELECT * FROM list_collections_paginated(${offset},${limit});`);
        return res.rows
    }

    async getDetailedById(idCollection: number) {
        const { rows }: QueryResult<ICollectionDetailed> = await this.pool.query(`SELECT * FROM list_collection_detailed_x_id(${idCollection});`);
        const retraso = await new Promise(resolve => {
            setTimeout(() => {
                console.log(rows[0]);
                resolve(rows[0])
                // return rows[0]
            }, 2000);
        })
        const data = await retraso as ICollectionDetailed
        return data
    }
}

export const collectionRepositoryInstance = new CollecionRepository();

// (async () => {
//     const repo = new CollecionRepository()
//     const data = await repo.getPaginated(8, undefined)
//     console.log(data);
//     console.log(data.length);
// })();