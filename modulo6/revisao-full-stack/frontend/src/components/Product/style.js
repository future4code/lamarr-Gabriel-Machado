import styled from 'styled-components';

export const MyProduct = styled.div`
        display: flex;
        background-color: lightgray;
        flex-direction: row;
        align-items:center;
        justify-content: center;
        margin:0 0 0.2vw 0;
        width: 80%;
        :hover{
            background-color: lightseagreen;
        }
        p{
            font-weight:bold;
            margin-left:1vw;
            margin-right:1vw;
            font-size: 1vw;

        }
        button{
            background: lavender;
            box-shadow: 0.5px 1px 4px black;
            font-size: 1vw;
            font-weight: bold;
            color: blue;
           :active{
                background-color: lightgrey;
            }

        }

        input{
//            margin-bottom: 7px;
            font-size: 1vw;;
            width: fit-content;
            box-shadow:1px 2px 5px;
        }

`;