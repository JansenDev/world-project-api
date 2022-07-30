// import { GraphQLFieldResolverParams } from "apollo-server-types";
import { collectionService } from "../../shared/service/collection.service";
const resolvers = {
    Query: {
        greeting: () => "Hello World",
        getCollectionsPaginated: (_: any, { input: { offset, limit } }: any) => collectionService.getCollectionPaginated(offset, limit),
        getCollectionDetailedById: (_: any, { idCollection }: any) => collectionService.getDetailedById(idCollection)
    }
}



export { resolvers }
//