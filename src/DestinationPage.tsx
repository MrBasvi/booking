import React from 'react';
import './App.css';

const imageStyle: React.CSSProperties = {
  height: '30%',
  width: '30%'
}

const DestinationPage: React.FC = () => {
  return (
    <div className="destination-page">
      <h1>Мальдивы - рай на Земле!</h1>
      <img
        src={require('./assets/maldives.jpg')}
        style={imageStyle}
        alt="Мальдивы"
      />
      <p>
        Мальдивы - это тропический рай, известный своими белоснежными пляжами, кристально чистой водой и роскошными курортами.
        Здесь можно заняться дайвингом, снорклингом, виндсерфингом или просто расслабиться на пляже, наслаждаясь солнцем.
      </p>
      <ul>
        <li>Белоснежные пляжи</li>
        <li>Кристально чистая вода</li>
        <li>Роскошные курорты</li>
        <li>Богатый подводный мир</li>
        <li>Отличные возможности для релаксации</li>
      </ul>
      <a href="/booking">Забронировать сейчас!</a>
    </div>
  );
};

export default DestinationPage;
