import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Inspire = () => {
  const [inspire, setInspire] = useState(null);

  useEffect(() => {
    axios
      .get('https://type.fit/api/quotes')
      .then((response) => {
        console.log(response.data[0].text);
        setInspire(response.data);
      })
      .catch((e) => {
        console.log(e.toString());
      });
  }, []);

  console.log(inspire);

  return (
    <>
      {inspire &&
        inspire.map((quotes) => <p className="qotd"> {quotes.text}</p>)}
    </>
  );
};

export default Inspire;
