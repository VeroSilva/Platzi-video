import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { getVideoSearched } from '../actions';

import '../assets/styles/components/Search.scss';

const Search = ({ isHome, getVideoSearched }) => {
  const inputStyle = classNames('input', {
    isHome,
  });

  const handleInput = (e) => {
    getVideoSearched(e.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input type='text' className={inputStyle} placeholder='Buscar...' onKeyUp={handleInput} />
    </section>
  );
};

const mapDispatchToProps = {
  getVideoSearched,
};

export default connect(null, mapDispatchToProps)(Search);
