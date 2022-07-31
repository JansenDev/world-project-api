// import { GraphQLFieldResolverParams } from "apollo-server-types";
import { collectionServiceInstance } from "../../shared/service/collection.service";
import { pageServiceInstance } from "../../shared/service/page.service";
const resolvers = {
    Query: {
        greeting: () => "Hello World",
        getCollectionsPaginated: (_: any, { input: { offset, limit } }: any) => collectionServiceInstance.getCollectionPaginated(offset, limit),
        getCollectionDetailedById: (_: any, { idCollection }: any) => collectionServiceInstance.getDetailedById(idCollection),
        getPagesByIdCollectionAndVolumeNumber: (_: any, { input: { id_collection, volume_number, offset, limit } }: any) => pageServiceInstance.listByIdCollectionAndVolumenNumber(id_collection, volume_number, offset, limit)
    }
}



export { resolvers }
//