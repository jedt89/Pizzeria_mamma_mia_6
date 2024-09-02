import React, { useContext } from 'react';
import { Header } from '../components';
import { PizzaCard } from '../pages';
import { MainContext } from '../components/context/MainContext';

const Home = ({ handleExpand }) => {
  const { pizzas } = useContext(MainContext);

  return (
    <div className='home-container' style={{ marginBottom: '2rem' }}>
      <Header />
      <div className='content-container'>
        <h1 style={{ color: '#fff' }}>Las regalonas de mamá</h1>
        <div className='content'>
          {pizzas && pizzas.length > 0 ? (
            pizzas.map((pizza, index) => (
              <PizzaCard
                {...pizza}
                handleExpand={handleExpand}
                key={index}
              />
            ))
          ) : (
            <p>No hay pizzas disponibles</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
