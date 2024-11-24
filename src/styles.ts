import { createGlobalStyle } from "styled-components";

export const cores = {
    vermelho: '#E66767',
    fundo: '#FFF8F2',
    rodape: '#ffebd9'
}

export const GlobalCss = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${cores.fundo};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`
