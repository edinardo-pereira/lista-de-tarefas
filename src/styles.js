import styled from 'styled-components'

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc"

export const Titulo = styled.div`
    font-size: 45px;
    color: red;
    margin-bottom: 15px;
        

`
export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
      
    

`

export const Lista = styled.div`
    background: white;
    padding: 30px 20px;
    border-radius: 6px;
    width: 35%;
        

`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4) ;
    border-radius: 5px;
    height: 40px;
    width: 70%;
    
`
export const Button = styled.button`
    width: 25%;
    background: #8052ec;
    height: 40px;
    border-radius: 5px;
    font-weight: 900px;
    line-height: 2px;
    font-size: 18px;
    margin-left: 10px;
    border: none;
    color: #ffffff;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        transition: 0.1ms;
    }
    &:active {
        opacity: 0.6;
        transition: 0.2ms;
    }
    

`
export const Ul = styled.ul`
    border-radius: 5px;
    padding: 5px;
    font-size: 18px;
    
        

`
export const ListaTarefas = styled.div`
    background: ${props => props.isFinished ? '#e8ff8b' : '#e4e4e4'};
    list-style: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 18px;
    margin-top: 7px ;
    display: flex;
    align-items: center;
    justify-content:space-between ;
    padding: 0 10PX;
    height: 60PX;
    width: 95%;

`


export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;

`

export const Check = styled(FcCheckmark)`
    cursor: pointer;

`