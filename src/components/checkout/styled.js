import styled from "styled-components";

const CheckoutContenedor = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media screen and (min-width: 320px) and (max-width: 769px) {
    flex-direction: column;
  }
  .checkout-form {
    .container {
      @media screen and (min-width: 320px) and (max-width: 769px) {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: space-between;
      }
      label {
        p {
          font-size: 1rem;
          font-weight: 500;
          margin: 0 0 10px 0;
        }
        input {
          margin-bottom: 10px;
          padding: 5px;
          border-radius: 5px;
          border: 1px solid rgb(92, 198, 240);
          :focus {
            outline: none;
          }
        }
      }
    }
  }
  .menu-listado-checkout {
    border-bottom: 1px solid;
    .card-menu-checkout {
      display: flex;
      margin-bottom: 15px;
      align-items: center;
      .imagen-card-menu-checkout {
        text-align: center;
        align-items: center;
        width: 50%;
        img {
          width: 20%;
        }
      }
      .text-checkout {
        h3 {
        }
        .precio {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .cantidad {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 600;
        }
      }
    }
  }
  .total {
    text-align: right;
    color: rgb(92, 198, 240);
    font-weight: 700;
  }
  .btn-acciones {
    display: flex;
    justify-content: space-between;
    .volver {
      border: none;
      background: none;
      cursor: pointer;
      font-weight: 600;
    }
    .finalizar {
      width: 60%;
      background: rgb(92, 198, 240);
      border: none;
      border-radius: 5px;
      height: 30px;
      color: white;
      cursor: pointer;
      :focus {
        outline: none;
      }
    }
  }
  .caso-borde {
    margin: 0;
    font-size: 0.6rem;
    color: red;
    font-weight: 700;
    padding-bottom: 10px;
  }
`;

export default CheckoutContenedor;
