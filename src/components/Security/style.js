import styled from "styled-components";

export const Title = styled.h2 `
    margin-bottom: 1rem;
    color: rgb(34, 37, 75);
    font: 500 3.4375rem Paralucent, sans-serif;
`;

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 80%;
    margin: 3rem auto;
    padding: 0px 0px 7rem;
    max-width: 1440px;

`;

export const ImageBox = styled.div `
    width: 70%;
    margin: 3rem 0;
`;

export const Image = styled.img `
width: 70%;
    margin: 3rem 0;
`;

export const List = styled.ul `
    margin-top: 2rem;
    `;

export const Item = styled.li `
    font: 300 1.375rem / 1.875rem Soleto, sans-serif;
    padding: 0.875rem;
    color: rgb(34, 37, 75);
    text-align: center;

`;