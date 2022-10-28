import styled from "styled-components";

const HeaderContenedor = styled.div`
  margin: 0 1rem;
  .navbar {
    padding-bottom: 2rem;
    .menu-top {
      text-align: right;
      z-index: 5;
      position: relative;
      list-style: none;
      margin-top: 0;

      ul {
        list-style: none;
        display: inline-flex;
        gap: 20px;
        flex-direction: unset;
        li {
          a {
            text-decoration: none;
            color: rgb(92, 198, 240);
            .carrito-contador {
              font-weight: 700;
            }
            .carrito-monto {
              .monto {
                font-weight: 700;
              }
            }
            span {
              padding-right: 5px;
            }
          }
        }
      }
    }
    .banner-imagen {
      max-width: 100%;
    }
    .menu-bottom {
      text-align: center;
      span {
        font-size: 1.9rem;
        font-weight: 600;
      }
      ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        justify-content: center;
        padding: 0;
        li {
          a {
            color: rgb(92, 198, 240);
            text-decoration: none;
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;

const MenuCarroContenedor = styled.div`
  .menu {
    position: fixed;
    right: 0;
    background: #e5f3f7;
    top: 0;
    height: 100%;
    z-index: 99999999;
    border-radius: 2px;
    padding: 1rem;
  }
  .fuera {
    width: 0;
    padding: 0;
  }
  .dentro {
    width: 25%;
  }
  .header-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btn-cerrar-carrito{
      border: none;
      background: none;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
    }
  }
  .menu-listado {
    .card-menu {
      display: flex;
      text-align: center;
      align-items: center;
      .imagen-card-menu {
        width: 40%;
        text-align: center;
        img {
          width: 40%;
        }
      }
    }
    .contenedor-contador {
      display: flex;
    justify-content: center;
    .contador-producto{
      width: 20px;
    }
      button {
        background: none;
        border: 1px solid rgb(92, 198, 240);
        border-radius: 4px;
        height: 25px;
        width: 25px;
        cursor: pointer;
        :hover {
          background-color: rgb(92, 198, 240);
          color: white;
        }
      }
    }
  }
  .checkout{
    button{
      width: 100%;
      background: rgb(92,198,240);
      border: none;
      border-radius: 5px;
      height: 30px;
      margin-top: 1rem;
      color: white;
      cursor: pointer;
    }
  }
  .total{
    color: rgb(92,198,240);
    font-weight: 600;
    font-size: 1rem;
  }
`;

export { HeaderContenedor, MenuCarroContenedor };
