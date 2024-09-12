import React, { useState, useEffect } from 'react';
import { articleData } from '../../utils/linkData';
import Card from '../card/Card';
import './Grid.scss';

const Grid = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const fakeData = articleData;
        resolve(fakeData);
      }, 1000);
    });
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        setArticles(res);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="grid-wrapper">
      {articleData.map((article) => (
        <Card cardData={article} key={article.id} />
      ))}
    </div>
  );
};

export default Grid;
