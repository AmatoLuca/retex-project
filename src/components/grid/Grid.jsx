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
        console.log('@@ res:', res);
        setArticles(res);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log('@@@ articles:', articles);
  }, [articles]);

  return (
    <div className="grid-wrapper">
      {/* <div style={{ backgroundColor: 'red' }}>uno</div>
      <div style={{ backgroundColor: 'yellow' }}>due</div>
      <div style={{ backgroundColor: 'blue' }}>tre</div>
      <div style={{ backgroundColor: 'green' }}>quattro</div>
      <div style={{ backgroundColor: 'orange' }}>cinque</div> */}

      {articleData.map((article) => (
        <Card cardData={article} />
      ))}
    </div>
  );
};

export default Grid;
