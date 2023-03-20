import styled from "styled-components";
type ContainerProps = {
    done: boolean;
}
export const Container = styled.div(({ done } : ContainerProps) =>(`
    display: flex;
    background-color: #20212C;
    padding:10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    img{
        margin-left: auto;
        cursor: pointer;
        width:25px;
        height:25px;
        padding: 5px;
        border-radius: 30px;
        background-color: #f00;
    }

    label{
        color: ${done? '#00FF7F' : '#ccc'};
        text-decoration: ${done? 'line-through' : 'initial'}
    }
    `))