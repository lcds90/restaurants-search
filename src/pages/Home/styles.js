import styled from 'styled-components';
import Slider from 'react-slick';

/* SECTION Theme Provider
    NOTE Como no componente App foi definido a propriedade theme, podemos receber-la através de props
    */
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
  width: 100vw;
`;

export const Container = styled.aside`
  background-color: ${({ theme: { colors } }) => colors.primary};
  font-family: ${({ theme: { fonts } }) => fonts.regular};
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: center;
  padding: 20px;
  ${'' /* align-items: center; */}
`;

export const Logo = styled.img`
  margin-bottom: 15px;
  width: 60%;
`;

export const Map = styled.div`
  background-color: grey;
`;

export const CarouselTitle = styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.regular};
  color: ${({ theme: { colors } }) => colors.text};
  font-size: 2.5rem;
  line-height: 1rem;
  margin-block: 20px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-inline: 15px;
  }
`;

// !SECTION
