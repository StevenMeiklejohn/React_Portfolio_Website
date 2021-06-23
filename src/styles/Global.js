import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }
  @font-face {
    font-family: 'WhiteRabbit';
    src: local('WhiteRabbit'), url(./fonts/whiterabbit.ttf) format('truetype');
    /* other formats include: 'woff2', 'truetype, 'opentype',
                              'embedded-opentype', and 'svg' */
  }
  
  @font-face {
    font-family: 'fat';
    src: local('fat'), url(./fonts/sayitfat.otf) format('opentype');
    /* other formats include: 'woff2', 'truetype, 'opentype',
                              'embedded-opentype', and 'svg' */
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: ''Montserrat', sans-serif';
  }


`;

export default GlobalStyles;