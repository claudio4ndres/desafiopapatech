import styled from "styled-components";

const ProductoContenedor = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  .row {
  }
  .info {
    .producto-cabecera {
        p{
         margin: 0px;
         line-height: 28px;
        }
      h1 {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 0.1rem;
      }
      .sku-contenedor{
        font-weight: 600;
        .sku-label{
                padding-right: 5px;
        }
      }
      .descripcion-producto{
        font-weight: 600;
        .descripcion-label{
            padding-right: 5px;
        }
      }
    }
    .agregar-al-carrito{
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        .contador{
            display: flex;
        }
        .contador-producto{
            width: 20px;
            text-align: center;
            font-size: 1rem;
            margin-top: 3px;
        }
        button{
            background: none;
            border: 1px solid rgb(92,198,240);
            border-radius: 4px;
            height: 30px;
            width: 30px;
            cursor: pointer;
            :hover{
                background-color: rgb(92,198,240);
                color:white;
            }
        }
    }
    .boton-carrito{
        width:100% !important;
        :hover{
            background-color: rgb(92,198,240);
            color:white;
        }
    }
    .precio{
      color: rgb(92,198,240);
      font-weight: 600;
      font-size: 1rem;
    }
  }
  .volver{
    a{
      font-weight: 600;
      cursor: pointer;
    }
  }
  .row-imagen{
    width: 20%;
    .producto-imagen{
      width: 80%;
      margin-top: 2rem;
    }
  }
`;

export default ProductoContenedor;
