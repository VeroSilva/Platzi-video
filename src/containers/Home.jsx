import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';

import '../assets/styles/App.scss';

const Home = ({ mylist, trends, originals, searchResult }) => {
  return (
    <div className='app'>
      <Header />
      <Search isHome />

      {
        searchResult.length > 0 ? (
          <Categories title='Búsqueda'>
            <Carousel>
              {searchResult?.map((item) => (
                <CarouselItem
                  key={item.id}
                  id={item.id}
                  cover={item.cover}
                  title={item.title}
                  year={item.year}
                  contentRating={item.contentRating}
                  duration={item.duration}
                  isList
                />
              ))}
            </Carousel>
          </Categories>
        ) : (
          ''
        )
      }

      {
        mylist.length > 0 ? (
          <Categories title='Mi lista'>
            <Carousel>
              {mylist?.map((item) => (
                <CarouselItem
                  key={item.id}
                  id={item.id}
                  cover={item.cover}
                  title={item.title}
                  year={item.year}
                  contentRating={item.contentRating}
                  duration={item.duration}
                  isList
                />
              ))}
            </Carousel>
          </Categories>
        ) : (
          ''
        )
      }

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
    searchResult: state.searchResult,
  };
};

export default connect(mapStateToProps, null)(Home);
