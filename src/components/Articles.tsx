import { useEffect, useState } from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";
import { IArticle } from "../models/Article";

const Articles = () => {
  const [articles, setArticles] = useState<IArticle[] | null>(null);

  // runs automatically after initial render
  useEffect(() => {
    // * setTimeout is used for testing reasons, so the user can see skeletons
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setArticles(data);
    }, 5000);
  }, []);

  return (
    <div className="articles">
      <h2>All Articles</h2>

      {articles &&
        articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}

      {!articles &&
        // * we do not know by advance the number of post articles, so we could decide to display 5 or 10 skeletons, randomly
        [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme="light" />)}
    </div>
  );
};

export default Articles;
