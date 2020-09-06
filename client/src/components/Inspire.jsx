import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBContainer } from 'mdbreact';

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

  return (
    <MDBContainer
      className="text-center"
      style={{ height: '10vh', width: '30vw' }}
    >
      <p className="font-weight-bold white-text" style={{ fontSize: '16pt' }}>
        {inspire.text}
      </p>
    </MDBContainer>
  );
};

export default Inspire;
