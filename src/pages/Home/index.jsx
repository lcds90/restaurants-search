import React from 'react';
import logo from '../../assets/logo.svg'
import { Container, Search } from './styles';

export default () => {
  return (
    <Container>
      <Search />
      <img src={logo} alt="Logo" />
    </Container>
  );
};
