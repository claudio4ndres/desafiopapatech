import styled from "styled-components";

const ContainerHome = styled.div`
  .contenedor-items {
    .loader-home {
      height: 300px;
      text-align: center;
      img {
        width: 30%;
      }
    }
    .cards {
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      .card {
        flex: 0 0 200px;
        border: 1px solid #ccc;
        box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
        margin: 0 auto;
        margin-bottom: 1rem;
        h3 {
          font-size: 1rem;
        }
        .text {
          padding: 0 20px 20px;
          p {
            margin: 0px;
            font-size: 0.9rem;
            text-transform: capitalize;
            line-height: 1.5rem;
          }
        }
      }
      .card .imagen-card {
        text-align: center;
        margin-top: 1rem;
        img {
          max-width: 50%;
        }
      }
    }

    .card {
      .text {
        button {
          background: gray;
          border: 0;
          color: white;
          padding: 10px;
          width: 100%;
          margin-top: 1rem;
          cursor:pointer;
          :hover{
            background: rgb(92, 198, 240);
          }
        }
      }
    }
  }
  .contenedor-paginador {
    ul {
      list-style: none;
      display: flex;
      gap: 10px;
      padding: 0;
      justify-content: center;
      li {
        color: rgb(92, 198, 240);
        cursor: pointer;
      }
      .active {
        border-bottom: 1px solid rgb(92, 198, 240);
      }
    }
  }
`;

const StyledComponent = styled.div`
  // your styles
`;

export { ContainerHome, StyledComponent };
