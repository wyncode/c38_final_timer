import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Inspire = () => {
  const [inspire, setInspire] = useState(null);

  useEffect(() => {
    axios
      .get('https://type.fit/api/quotes')
      .then((response) => {
        const randomNumber = Math.floor(Math.random() * response.data.length);
        const randomQuote = response.data[randomNumber];
        setInspire(randomQuote);
      })
      .catch((e) => {
        console.log(e.toString());
      });
  }, []);

  if (!inspire) {
    return null;
  }

  return <p className="qotd">{inspire.text}</p>;
};

export default Inspire;
