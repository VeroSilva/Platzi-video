import React from 'react';
import useInitialState from '../hooks/useInitialState';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {
  const initialState = useInitialState(API);

  return (
    <div className='app'>
      <Search />

      {
        initialState.mylist?.length > 0 && (
          <Categories title='Mi lista'>
            <Carousel>
              {
                initialState.mylist.map((item) => <CarouselItem key={item.id} />)
              }
            </Carousel>
          </Categories>
        )
      }

      <Categories title='Tendencias'>
        <Carousel>
          {
            initialState.trends?.map((item) => <CarouselItem key={item.id} cover={item.cover} title={item.title} year={item.year} contentRating={item.contentRating} duration={item.duration} />)
          }
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi vídeo'>
        <Carousel>
          {
            initialState.originals?.map((item) => <CarouselItem key={item.id} cover={item.cover} title={item.title} year={item.year} contentRating={item.contentRating} duration={item.duration} />)
          }
        </Carousel>
      </Categories>
    </div>
  );
};

export default Home;
