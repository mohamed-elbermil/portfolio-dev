import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import styles from "./Veille.module.css";

export default function Veille() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://techcrunch.com/feed/"
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.items.slice(0, 3)); 
      })
      .catch((error) => {
        console.error("Erreur chargement RSS :", error);
      });
  }, []);

  return (
    <section>
      <Title
        theme="Veille technologique"
        title={
          <>
            Toujours connectés aux dernières
            <span> &lt; tendances /&gt;</span>
          </>
        }
        text="Voici les dernières actualités TechCrunch avec images extraites."
      />

      <div className={styles.allArticles}>
        {articles.map((article, index) => {

          const match = article.description.match(/<img.*?src="(.*?)"/);
          const imageUrl = match ? match[1] : null;

          return (
            <div key={index} className={styles.articleItem}>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={article.title}
                  className="article-image"
                />
              )}

              <div>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="article-link"
                >
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                </a>
                <p className="article-date">
                  {new Date(article.pubDate).toLocaleDateString()}
                </p>
                <p className="article-description">
                  {article.description.replace(/<[^>]+>/g, "").slice(0, 150)}...
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
