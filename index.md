import { FullScreenCode } from 'mdx-deck/layouts'
import { Head } from 'mdx-deck'
import { Emosvg } from './emosvg'
export { default as theme } from './theme'

<Head>
  <title>Server-side React</title>
</Head>

# Server-side React
# ⚛️

### `@charlespeters`

---

Server-side rendering your React application means leveraging a server to send an initial render to your client. 
---

Server-side rendering your React application means not sending your user an empty `<div>` and a 🙏

---

- Universal
- Isomorphic
- Environmental
- Client-server

---

[_Isomorphic JavaScript: the future of Web Apps_](https://medium.com/airbnb-engineering/isomorphic-javascript-the-future-of-web-apps-10882b7a2ebc) from Spike Brehm, Airbnb Engineering Nov. 2013

---

Single page apps have a single point of failure.

Lack SEO.

Suffer Performance Concerns.

```notes
Talk about progressive enhancement?
```

---

Server side rendering your React application
+ benefits your users in a tangible way
+ leverages your existing code 

---

# 🚧 Demo 🚧

---

![ Gif of Create React App loading on a slow connection ](./assets/CRA-loading.gif)

---

---

Likely, your `client.js`

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById('root'));
```

---

and an `index.html`:

```html
<!DOCTYPE html>
  <html>
  <head>
      <meta charset="utf-8">
      <title>SSR</title>
  </head>
  <body>
      <div id="root"></div>
      <script src="./client.js"></script>
  </body>
  </html>
```

---

# 🚧 Demo 🚧

---

![A gif goes here of the Server rendered app]()

---

```jsx
import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import App from "./components/App";

const app = express();

function template(props) {
  const app = renderToString(<App {...props} />)
  return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>SSR</title>
      </head>
      <body>
          <div id="root">${app}</div>
          <script src="./client.js"></script>
      </body>
      </html>
  `;
}

app.get("/*", (req, res) => {
  res.status(200).send(template())
});

app.listen(3000);
```

---

```jsx
// client.js
import React from 'react'
import ReactDOM from "react-dom";
import App from './components/App';

ReactDOM.hydrate(<App />, document.getElementById('root'));
```

---


---

## So that was simple 🌷 but that about 💐

+ Routing
+ Fetching Data
+ Dynamic Imports

---

# Considerations

- Components only has a truncated lifecycle: `constructor()`, `UNSAFE_componentWillMount()` 😳
- Essentially: no `setState()` 🚫
- matchMedia, localStorage, fetch are all gone, kinda ☠️

---

# Routing

---

## In the case of React Router

On the client 

```js
ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

& on the server

```js
renderToString(
  <StaticRouter>
    <App />
  </StaticRouter>
)
```

---

```js
function template({ location, ...props }) {
  const context = {}
  const app = renderToString(
  <StaticRouter location={location} context={context}>
    <App {...props} />
  </StaticRouter>
)
  return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>SSR</title>
      </head>
      <body>
          <div id="root">${app}</div>
          <script src="./client.js"></script>
      </body>
      </html>
  `;
}

app.get("/*", (req, res) => {
  const markup = template({ location: req.url })
  res.status(200).send(markup)
});
```

---

# Fetching Data

---

- Hoist your Data Fetching
- 

---

# Dynamic Imports

---

- React Loadable

---

# PRO-TIP

Don't travel alone. 🚀

---

## Frameworks

![Logo for Next.js](./assets/nextjs-white-logo.svg)

- [Next.js](https://nextjs.org/)
- [Razzle](https://github.com/jaredpalmer/razzle) + [After.js](https://github.com/jaredpalmer/after.js)
- [faceyspacey/react-universal-component](https://github.com/faceyspacey/react-universal-component)

---

Hooks and Suspense

```notes

```

---

# Questions

---

<Emosvg size={250} />

## Charles is a UI Engineer currently working on server-side rendered applications at Microsoft.

**[`@charlespeters`](https://twitter.com/charlespeters)**   
**[`charlespeters.net`](https://charlespeters.net/)** 


