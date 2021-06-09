import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    html {
    font-size: 16px;
    box-sizing: border-box;
    height: 100%;
    }

    body {
    padding: 0;
    margin: 0;
    height: 100%;
    > #root  {
        height: 100%;
    }
    }

    *,
    *:before,
    *:after {
    box-sizing: inherit;
    }

    ul {
    margin: 0;
    padding: 0;
    list-style: none;
    }

    a {
    color: inherit;
    text-decoration: none;
    color: inherit;
    }

    button {
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    }

    button,
    input, select {
    border: 0;
    outline: none;
    }
    textarea:focus,
    input:focus {
    outline: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
    margin: 0;
    }
`;
