import styled from "styled-components"

export const FooterMain = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #D8D0C6;

    div:first-child{
        background-color: white;
        box-shadow: 1px 1px 6px darkgray;
        width: 490px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 25px;
        padding: 0 12px;
        margin: 10px;
        input{
            font-weight: 400;
            font-size: 14px;
            color: #78787C;
            margin-right: auto;
            width: 390px;
            outline: none;
            border: none;
            padding: 16px;
        }
    }
    div:last-child{
       
        a{
            display: flex;
            justify-content: end;
            margin: 5px;
            img{
                width: 50px;
                height: 50px;
                background-color: green;
                border-radius: 50px;
                margin-right: 20px;
            }
        }
    }
`