import styled from "styled-components";
import { cores } from "../../styles";

import { Props } from ".";

export const TagContainer = styled.div<Props>`
    background-color: ${cores.vermelho};

    height: 14px;
    top: 462px;
    left: 570px;
    display: inline-block;
    color: white;

    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.06px;
    text-align: center;
`