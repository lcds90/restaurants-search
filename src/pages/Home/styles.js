import styled from 'styled-components';


/* SECTION Theme Provider
    NOTE Como no componente App foi definido a propriedade theme, podemos receber-la através de props
    */
export const Container = styled.aside`
    background-color: ${({theme: { colors }}) => colors.primary};
    ${'' /* font-family: ${({theme: { fonts }}) => fonts.regular}; */}
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;

`;
// !SECTION