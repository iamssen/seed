import { TemplateParams } from './types';

export default ({body, initialState}: TemplateParams) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset=UTF-8>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="/"/>
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css"/>
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
    <title>Title...</title>
  </head>
  
  <body>
    <div id="app">${body}</div>
  </body>
  
  <script src="vendor.js"></script>
  <script src="init.js"></script>
  <script src="style.js"></script>
  <!-- And if you use css themes you need require add their js files. -->
  <script src="showcase.js"></script>
</html>
`