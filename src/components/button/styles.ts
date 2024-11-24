import styled from "styled-components";
import { Link } from "react-router-dom";
import { cores } from "../../styles";

export const ButtonContainer = styled.button`
    border: 2px solid ${cores.vermelho};
    color: white;
    background-color: ${cores.vermelho};
    padding: 10px 20px;
    font-size: 14px;
    text-decoration: none;
`

export const ButtonLink = styled(Link)`
    border: 2px solid ${cores.vermelho};
    color: white;
    background-color: ${cores.vermelho};
    padding: 8px;
    font-size: 14px;
    text-decoration: none;
`