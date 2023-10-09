import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Exo+2&family=Oswald:wght@500&display=swap');

    font-family: 'Oswald', sans-serif;
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(31, 41, 67);
        margin-bottom: 2rem;
        height: 4rem;
    }

    h1 {
        font-family: 'Oswald', sans-serif;
        margin-top: 0;
        padding-top: 0.8rem;
        padding-left: 3rem;
      }
      
      nav ul {
        list-style: none;
        padding: 0;
        display: flex;
        padding-right: 20rem;
      }
      
      nav li {
        margin-right: 2.3rem;
        cursor: pointer;
        transition: all 200ms;
      }
      
      nav li:hover {
        color: rgb(255, 177, 121);
      }

      #divBusca {
        position: relative;
        justify-content: center;
        margin-left: 43vw;
       }

      input[type="text"] {
        padding: 0.5rem 1.5rem; 
        border: none; 
        border-radius: 0.9rem; 
        margin-right: 1rem; 
       }

      #buttonBusca {
        padding: 0.6rem 0.5rem;
        background-color: #0077b6;
        color: #fff; /* Cor do texto do botão */
        border: none; /* Remove a borda */
        border-radius: 5px; /* Adiciona cantos arredondados */
        cursor: pointer; /* Muda o cursor ao passar o mouse sobre o botão */
       }

`;

export const MovieList = styled.ul`
    padding: 1.5rem;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 1rem;
    row-gap: 1.3rem;
`;

export const Movie = styled.li`
    background-color: rgba(39, 50, 77, 0.75);
    font-family: 'Oswald', sans-serif;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    img {
        width: 10rem;
        border-radius: 0.5rem;
        margin-bottom: 1.5rem;
    }
    span {
        font-weight: bolder;
        font-size: 120%;
        text-align: center;
    }
    a {
        transition: all 0.3s;
    }

    border-radius: 0.5rem;
`;

export const Btn = styled.button`

    margin-top: 1rem;
    padding: 0.7rem 3rem;
    border-radius: 0.5rem;
    border-color: rgb(255, 135, 49);
    color: #ffff;
    background-color: rgb(255, 135, 49);
    font-weight: 800;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 200ms;
    
    &:hover {
        background-color: transparent;
    }
`;
