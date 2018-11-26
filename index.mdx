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

## Server-side rendering your React application means leveraging a server to send an initial render to your client. 


```notes
We're going to use Node for our server language.
```
---

## Server-side rendering your React application means not sending your user an empty `<div>`, a single bundle <br />and a 🙏

---

- Universal
- Isomorphic
- Environmental
- Client-server

---

### [_Isomorphic JavaScript: the future of Web Apps_](https://medium.com/airbnb-engineering/isomorphic-javascript-the-future-of-web-apps-10882b7a2ebc) from Spike Brehm, Airbnb Engineering Nov. 2013

---

Single page apps have a single point of failure.

Lack SEO.

Suffer Performance Concerns.

```notes
Talk about progressive enhancement?
```
---

### [_7 Principles of Rich Web Applications_](https://rauchg.com/2014/7-principles-of-rich-web-applications) from Guillermo Rauch, Nov. 2014

```notes
The one thing i like about this post is that makes the point about single page applications and server-rendering being a false dichotomy. It's not either or, it's one hand washing the other.
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

```notes
Bring up client-side demo
```

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

![A gif goes here of the Server rendered app](./assets/RAZZLE-demo.gif)

---

```jsx
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./components/App";

export default function template(props) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>SSR</title>
    </head>
    <body>
        <div id="root">${renderToString(<App {...props} />)}</div>
        <script src="./client.js"></script>
    </body>
    </html>
  `;
}
```

---

## Add our template function to our response callback

```jsx
import express from "express";
import template from "./template";

const app = express();

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

```notes
Here we've given the result of data fetching to App via props on the server
```

---

## So that was simple 🌷 but that about 💐

+ Routing
+ Fetching Data

---

# Considerations

- Components only has a truncated lifecycle: `constructor()`, `UNSAFE_componentWillMount()` 😳
- Essentially: no `setState()` 🚫
- matchMedia, localStorage, fetch are all gone, kinda ☠️

```notes
There are lots of universal fetch packages to use that mimic the browser API


and if you're highly dependent on localStorage and matchMedia and you can mock them on the `global` object in node
```

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

```notes
We have to give StaticRouter a context object to give the client from the server. It can be an empty object.
```

---

# Fetching Data

---

- Hoist your Data Fetching fetching outside your application
- Leverage `async`/`await`
- Coupling a component's data fetching to it's implementation is possible but 😖

```notes
There are lots of implementations of coupling data-fetching to 

```

---

## Updating our response callback

```js
async (req, res) => {
  const data = await fetch('endpoint/').then(res => res.json())
  const markup = renderToString(<App {...data} />)
  
  res.send(markup)
}
```

---

## Coupling data-fetching implementation

```js
class App extends React.Component {
  static async getInitialProps() {
    const data = await fetch('endpoint/').then(res => res.json())
    return { data }
  }
}
```

---

## Authentication

---

# 🍪

You can grab your token from the server and call the same endpoint as that user.

```js
async (req, res) => {
  const { TOKEN } = req.cookies
  const data = await fetch('endpoint/', { headers: { Authorization: TOKEN } }).then(res => res.json())
}
```

---

# PRO-TIP

Don't travel alone. 🚀

---

# Use a framework 🛠

---

## Frameworks

![Logo for Next.js](./assets/nextjs-white-logo.svg)

- [Next.js](https://nextjs.org/)
- [Razzle](https://github.com/jaredpalmer/razzle) + [After.js](https://github.com/jaredpalmer/after.js)
- [faceyspacey/react-universal-component](https://github.com/faceyspacey/react-universal-component)

---

# Getting started with Next.js

1. `yarn add react react-dom next`
2. Add some scripts `{ "dev": "next" }`
3. Create `pages/index.js`
4. 🔥🌎⚡️🌈🍷

---

Hooks and Suspense

```notes
Not gonna lie, most of this is going to be speculatio on suspense because we haven't seen an API on that.
But....Hooks as long they flow
```

---

```js
const ThemeContext = React.createContext({ dark: true });

function App(props) {
  const [open, setOpen] = React.useState(false);
  const context = React.useContext(ThemeContext);

  return (
    <div
      className="App"
      style={{
        background: context.dark ? 'black' : 'white',
        color: context.dark ? 'white' : 'black'
      }}>
      <h1>Hello {props.name}</h1>
      {open && 'I AM OPEN'}
      <button onClick={() => setOpen(!open)}>Toggle</button>
    </div>
  );
}
```
---

# Questions

---

<Emosvg size={250} />

## Charles is a UI Engineer currently working on server-side rendered applications at Microsoft.

**[`@charlespeters`](https://twitter.com/charlespeters)**   
**[`charlespeters.net`](https://charlespeters.net/)** 


