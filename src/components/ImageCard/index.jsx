import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  padding: 5px;
  justify-content: center;
  border-radius: 15px;
  background-image: url(${({ photo }) => photo});
  background-size: cover;
  box-shadow: 4px 2px 4px 0px rgb(0 0 0 / 50%);
  margin-block: 5px;
`;

const Title = styled.p`
  font-family: ${({ theme: { fonts } }) => fonts.regular};
  color: #fff;
  font-size: 0.75rem;
  margin: 5px;
`;

export default ({ photo, title }) => {
  return (
    <Card photo={photo}>
      <Title>{title}</Title>
    </Card>
  );
};
