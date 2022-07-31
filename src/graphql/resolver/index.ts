// import { GraphQLFieldResolverParams } from "apollo-server-types";
import { collectionServiceInstance } from "../../shared/service/collection.service";
const resolvers = {
    Query: {
        greeting: () => "Hello World",
        getCollectionsPaginated: (_: any, { input: { offset, limit } }: any) => collectionServiceInstance.getCollectionPaginated(offset, limit),
        getCollectionDetailedById: (_: any, { idCollection }: any) => collectionServiceInstance.getDetailedById(idCollection)
    }
}



export { resolvers }
//