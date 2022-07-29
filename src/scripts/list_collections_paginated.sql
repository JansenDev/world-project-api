
DROP FUNCTION IF EXISTS public.list_collections_paginated;
CREATE OR REPLACE FUNCTION public.list_collections_paginated(offset_p int default 0, limit_p int default 10)
    RETURNS table
            (
                collection_id int,
                popularity int,
                name varchar,
                volumes int,
                volumes_total int,
                image varchar,
                create_at varchar
            )
    LANGUAGE plpgsql
AS
$function$

BEGIN
    RETURN QUERY
        select c.collection_id,
               c.popularity,
               c.name,
               c.volumes,
               c.volumes_total,
               c.image,
               c.create_at
        from collection c
        order by popularity desc
        offset offset_p limit limit_p;

END;
$function$;