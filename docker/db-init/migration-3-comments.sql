DROP TABLE IF EXISTS comments;

CREATE TABLE IF NOT EXISTS comments (
    id SERIAL NOT NULL,
    article_id INT4 NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id),
	CONSTRAINT fk_articles FOREIGN KEY (article_id) REFERENCES articles(id) ON DELETE CASCADE
);
