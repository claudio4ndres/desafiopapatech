import styled from "styled-components";

 const RootContenedor = styled.div`
    width: 70%;
    margin: 0 auto;
    @media screen and (min-width: 320px) and (max-width: 600px) {
      width: 100%;
    }
  .margin-container{
    padding: 2rem;
    margin: 1rem;
    background: white;
    border-radius: 10px;
  }
`;
 export default RootContenedor;
