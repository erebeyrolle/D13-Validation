CREATE VIEW vw_article AS
SELECT
    a.id AS "id",
    a.title AS "title",
    a.author_id AS "author_id",
    a.created_at AS "created_at",
    a.updated_at AS "updated_at",
    COUNT(c.id) AS "nb_comment"
FROM articles AS a
LEFT OUTER JOIN comments AS c ON c.article_id = a.id
GROUP BY a.id
ORDER BY a.created_at ASC;
