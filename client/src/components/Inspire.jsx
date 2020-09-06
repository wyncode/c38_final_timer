import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Inspire = () => {
  const [inspire, setInspire] = useState([]);

  useEffect(() => {
    axios
      .get('https://type.fit/api/quotes')
      .then((response) => {
        let newArray = Array.from(response.data);
        setInspire(newArray);
        console.log(inspire);
      })
      .catch((e) => {
        console.log(e.toString());
      });
  }, []);

  return (
    <>
      {inspire.map((quotes, i) => (
        <p key={i} className="qotd">
          {' '}
          {quotes.text}
        </p>
      ))}
    </>
  );
};

export default Inspire;
