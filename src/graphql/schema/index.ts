import { gql } from "apollo-server-express"

const typeDefs = gql`

    input PaginatedInput{
        offset:Int
        limit:Int
    }

    type Collection {
        collection_id: ID
        popularity: Int
        name: String
        volumes: Int
        volumes_total: Int
        image: String
        create_at: String
    }

    type CollectionDetailed{
        collection_id: ID
        name: String
        titles: [String]
        volumes_total: Int
        volumes_extra: Int
        synopsis: String
        image: String
        gender_id: Int #Deprecaded
        tag_id: Int  #Deprecaded
        author: String
        first_post: String
        last_post: String
        background: String
        create_at: String
        volumes: Int
        genders: [String]
    }

    type PageContent{
        page_number: Int
        image: String,
        text: String,
        chapter_type: String,
        title: String,
        book_id: Int
    }

    input PageContentInput{
        id_collection:ID
        volume_number:Int
        offset:Int
        limit:Int
    }


    type Query {
    greeting: String
    getCollectionsPaginated(input:PaginatedInput): [Collection]
    getCollectionDetailedById(idCollection:ID):CollectionDetailed
    getPagesByIdCollectionAndVolumeNumber(input:PageContentInput):[PageContent]
    }
    `


export { typeDefs }