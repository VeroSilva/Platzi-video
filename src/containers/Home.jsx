import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = ({ mylist, trends, originals }) => {
  return (
    <div className='app'>
      <Search />

      <Categories title='Mi lista'>
        <Carousel>
          {
            mylist?.map((item) => <CarouselItem key={item.id} id={item.id} cover={item.cover} title={item.title} year={item.year} contentRating={item.contentRating} duration={item.duration} />)
          }
        </Carousel>
      </Categories>

      <Categories title='Tendencias'>
        <Carousel>
          {
            trends?.map((item) => <CarouselItem key={item.id} id={item.id} cover={item.cover} title={item.title} year={item.year} contentRating={item.contentRating} duration={item.duration} />)
          }
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi vídeo'>
        <Carousel>
          {
            originals?.map((item) => <CarouselItem key={item.id} id={item.id} cover={item.cover} title={item.title} year={item.year} contentRating={item.contentRating} duration={item.duration} />)
          }
        </Carousel>
      </Categories>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
