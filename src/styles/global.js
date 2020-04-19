import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/1581357816251-attachment.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,100&display=swap');
  
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }
  
  html,body, #root {
    min-height: 100%;
  }
  
  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased !important;
  }
  
  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Roboto  sans-serif;
  }
  
  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
  
`;
