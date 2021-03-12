import Styled from 'styled-components';

const CartaHover = Styled.div`
    &:hover{
        box-shadow: 5px 10px 20px 1px rgba(255, 255, 255, .273);
        transition: all 0.5s linear;
    }
`;
const Overflow = Styled.div`
   overflow:hidden;
`;

const CardBody = Styled.div`
  padding:2rem 0 !important;
`;
const CardText = Styled.p`
      padding:0.3rem 1rem;
      font-size:1rem;
`;

const Imagen = Styled.img`
   transition: all .21s  linear;
   &:hover{
    transform: scale(1.6);
   }
`


export {CartaHover,Overflow,CardBody,CardText,Imagen};