import React, { useState, useRef } from 'react';
import './App.css';
import Image from './type';
import Pagenation from './compornents/Pagenation';

function App() {
  const [fetchData, setFetchData] = useState<Image[]>([]);
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(ref.current?.value);

    //APIurl
    const url = `https://pixabay.com/api/?key=27286563-1ff5be5e8fc77643f6f900638&q=${ref.current?.value}&image_type=photo`;

    //APIを叩く
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.hits);
      setFetchData(data.hits);
    });
  };

  return (
    <div className="container">
      <div className='viewForm'>
        <h2>Pixabay clone</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder='画像検索' ref={ ref }/>
        </form>
      </div>
      <Pagenation fetchData={ fetchData }/>
    </div>
  );
}

export default App;
