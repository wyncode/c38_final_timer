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
        console.log(response.data[0].text);
        setInspire(randomQuote);
      })
      .catch((e) => {
        console.log(e.toString());
      });
  }, []);

  console.log(inspire);

  if (!inspire) {
    return null;
  }

  return <p className="qotd">{inspire.text}</p>;
  // <>
  //   {inspire &&
  //     inspire.map((quotes) => <p className="qotd"> {quotes[1].text}</p>)}
  // </>
  //   );
};

export default Inspire;
