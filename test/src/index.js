import { createServer } from "http";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";

const App =()=>
<div>
  <h1>Hello</h1>
  <Link to="/today"/>
</div>

createServer((req, res) => {
  // This context object contains the results of the render
  const context = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    });
    res.end();
  } else {
    res.write(html);
    res.end();
  }
}).listen(3000);