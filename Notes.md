# Server-side React

Server-side React is all about rendering your react application on the server and sending it to your client. Or a little more specifically, 

Why?

Perceived page load
Performance
A better UX

---

https://medium.com/airbnb-engineering/operationalizing-node-js-for-server-side-rendering-c5ba718acfc9

---



---

I'm going to skip the hard part. All of what we're about to talk about is going to require a build process for a server bundle. All the the JSX on the server needs transformed and all imported modules need transformed. Anything that isn't supported by Node also needs to be mocked or reconsidered.

---

Basic how?

Code snippets BEFORE and AFTER

### Before
- client bundle
- HTML

### After

`renderToString`
`ReactDOM.hydrate()`

---

Build tools

- Razzle
- Backpack  
- Webpack Node https://webpack.js.org/configuration/node/

---

Design Considerations:
- On the server, your component only has a truncated lifecycle: `constructor()`, `UNSAFE_componentWillMount()`
- So essentially: NO `setState()`
- matchMedia, localStorage, fetch are all gone, kinda

---

What do you have available on the server?

- Request Headers
- Cookies

---

Advanced Setup

- Data-fetching
- Working with React Router
- Code Splitting

---

Don't travel alone. Bring a framework

Use Next.js

---

- [After.js + Razzle](https://github.com/jaredpalmer/after.js)
- [React Universal Component](https://github.com/faceyspacey/react-universal-component)
- Custom Solutions

---

What about Suspense?

If everything is moving to the render method, and you're passing props and not grabbing things off the window object from inside your render method you should be golden

