// component/Main.js
import React from 'react';

function Main({ name, location, favorList }) {
  return (
    <div>
      <h1>안녕하세요, {name}님!</h1>
      <p>위치: {location}</p>
      <ul>
        {favorList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Main;