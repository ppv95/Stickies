const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
body{
    height: 100%;
    background: linear-gradient(#42275a, #734b6d);
    background-attachment: fixed;

h2{
    color: #42275a
}

.link {
    text-decoration: none;
    font-size: 14px;
    }
}

.note-title {
    color: white;
}

`