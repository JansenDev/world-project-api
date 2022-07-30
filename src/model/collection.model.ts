export interface ICollectionPaginate {
    collection_id: number
    popularity: number
    name: string
    volumes: number
    volumes_total: number
    image: string
    create_at: string
}

export interface ICollectionDetailed {
    collection_id: number
    name: string
    titles: string[]
    volumes_total: number
    volumes_extra: number
    synopsis: string
    image: string
    gender_id: number
    tag_id: number
    author: string
    first_post: string
    last_post: string
    background: string
    create_at: string
    volumes: number
    genders: string[]
}