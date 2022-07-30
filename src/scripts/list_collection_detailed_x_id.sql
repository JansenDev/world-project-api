drop function if exists list_collection_detailed_x_id;
create function list_collection_detailed_x_id( id_collection int)
    returns TABLE
            (
                collection_id bigint,
                name          character varying,""
                titles        character varying[],
                volumes_total integer,
                volumes_extra integer,
                synopsis      character varying,
                image         character varying,
                gender_id     bigint,
                tag_id        bigint,
                author        character varying,
                first_post    character varying,
                last_post     character varying,
                background    character varying,
                create_at     character varying,
                volumes       integer,
                genders       character varying[]
            )
    language plpgsql
as
$$
BEGIN
    /*************
            | * Descripcion : FUNCTION public.list_collection_detailed_x_id
            | * Proposito   : Funcion para Obtener detalles de una collecion por id
            | * Autor       : Jhonatan Segura Galindo
            | * Proyecto    : World Project
            | * Revisiones
           | *
            | * Fecha            Autor          Motivo del cambio
            | ----------------------------------------------------------------
            | -  29/07/2022    Jhonatan Segura   Nueva funcion
        ************/

    RETURN QUERY
        select col.collection_id::bigint,
               col.name,
               (select array_agg(t.name)
                from title t
                where t.collection_id = col.collection_id)  as titles,
               col.volumes_total,
               col.volumes_extra,
               col.synopsis,
               col.image,
               col.gender_id::bigint,
               col.tag_id::bigint,
               col.author,
               col.first_post,
               col.last_post,
               col.background,
               col.create_at,
               col.volumes,
               (select array_agg(g.name)
                from collection_gender cg
                         inner join gender g on g.gender_id = cg.gender_id
                where cg.collection_id = col.collection_id) as genders
        from collection col
        where col.collection_id = id_collection
        order by name;
END;
$$;
