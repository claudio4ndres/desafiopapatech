import styled from "styled-components";

const ExitoContenedor = styled.div`
  text-align: center;
  .contenedor-exito {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    img{
      @media screen and (min-width: 320px) and (max-width: 680px) {
        width: 90%;
      }
    }
  }
  .loader-imagen{
    width: 10%;
  }
  .btn-volver{
    width: 20%;
    background: rgb(92,198,240);
    border: none;
    border-radius: 5px;
    height: 30px;
    color: white;
    cursor: pointer;
    @media screen and (min-width: 320px) and (max-width: 680px) {
      width: 90%;
    }
  }
`;

export default ExitoContenedor;
