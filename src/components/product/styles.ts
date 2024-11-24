import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../tag/styles";

export const Card = styled.div`
    background-color: white;
    position: relative;

    ${TagContainer} {
        margin-right: 8px;
    }
`
export const Conteudo = styled.div`
    padding: 16px;
`

export const Titulo = styled.h3`
    width: 200px;
    color: ${cores.vermelho};

    font-family: Roboto;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.09px;
`

export const Descricao = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${cores.vermelho};
    padding: 24px 0 32px 0;

    width: 456px;
`

export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    position: absolute;
`

export const Nota = styled.h3`
    width: 55px;
    color: ${cores.vermelho};
`
export const Info = styled.div`
    display: flex;
    justify-content: space-between;
`