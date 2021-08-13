import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';
import { Carousel, CarouselTitle, Container, Logo, Map, Search, Wrapper } from './styles';
import restaurant from '../../assets/restaurante-fake.png';
import { Card } from '../../components';

export default () => {
  const [inputValue, setInputValue] = useState('');
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    dots: false,
    arrows: false,
  };
  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do Restaurante" />
          <TextField
            label="Pesquisar"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} />
          </TextField>
          <CarouselTitle>Na sua área</CarouselTitle>
          <Carousel {...settings}>
            <Card title="restaurante" photo={restaurant} />
            <Card title="restaurante" photo={restaurant} />
            <Card title="restaurante" photo={restaurant} />
            <Card title="restaurante" photo={restaurant} />
            <Card title="restaurante" photo={restaurant} />
            <Card title="restaurante" photo={restaurant} />
            <Card title="restaurante" photo={restaurant} />
            <Card title="restaurante" photo={restaurant} />
            <Card title="restaurante" photo={restaurant} />
            <Card title="restaurante" photo={restaurant} />
          </Carousel>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};
