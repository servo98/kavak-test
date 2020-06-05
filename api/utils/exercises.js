export function exercise1() {
    return `CREATE OR REPLACE VIEW TRACKS_FULL_DATA AS SELECT
    t.id AS track_id,
    t.title AS track_title,
    a.title AS album_title,
    u.email AS user_mail,
    c.name AS country_name
    FROM
        tracks AS t,
        users AS u,
        country AS c,
        albums AS a 
    WHERE  
        t.albumid = a.id
        AND t.userid = u.id
        AND u.countrycode = c.code`;
}
export function exercise2() {
    return `SELECT
                a.title
            FROM 
                albums AS a,
                users AS u,
                country AS c 
            WHERE 
                a.genre = 'ROCK' 
                AND a.userid = u.id
                AND u.countrycode = c.code
                AND c.name = 'PERU'`;
}
export function exercise3() {
    return `UPDATE
                tracks t,
                users u
            SET
                t.artist = u.name
            WHERE
                t.artist IS NULL
                AND t.userid = u.id`;
}
export function exercise4() {
    return [
        `UPDATE
            albums
        SET
            albums.status = 0
        WHERE
            albums.id NOT IN (
                SELECT
                    albumid
                FROM
                    tracks
            )`,
        `SELECT * FROM albums WHERE status = 0`
    ];
}
export function exercise5() {
    return [
        `UPDATE
            users as u
        SET
            u.status = 0
        WHERE
            NOT EXISTS (
                SELECT
                    1
                FROM
                    tracks AS t,
                    albums AS a
                WHERE
                    t.userid = u.id
                    AND a.userid = u.id
            )`,
        `SELECT
            u.*
        FROM
            users AS u
        WHERE
            NOT EXISTS (
            SELECT
                1
            FROM
                tracks AS t,
                albums AS a
            WHERE
                t.userid = u.id
                AND a.userid = u.id
        )`
    ]
  
    ;
}
export function exercise6() {
    return `
        SELECT 
            t.*
        FROM
            tracks as t,
            albums as a
        WHERE
            t.genre <> a.genre
    `;
}
