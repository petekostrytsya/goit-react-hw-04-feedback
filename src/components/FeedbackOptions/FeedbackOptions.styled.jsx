import styled from "styled-components";


export const ButtonList = styled.ul`
    display: flex;
    justify-content: center;
    margin-left: -30px;
`

export const Button = styled.li`
    font-family: Oxygen;
    font-size: 20px;
    margin: 0 10px;
    padding: 10px 20px;
    background-color: yellow;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: #3f2d8f 0px 0px 10px 0px;
    transition: all ease-in-out 0.3s;
    

    &:hover,
    &:focus {
        background-color: blue;
        color: yellow;
        scale: 1.1;
    }
`