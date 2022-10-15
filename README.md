# Setup Express + Babel

## Production

```js
"scripts": {
  "build": "babel src/index.js --out-dir production",
  "start": "npm run build && nodemon --inspect production/index.js",
  "serve": "node production/index.js"
},
```

## Development

```js
"scripts": {
  "start": "babel src -w --out-dir production",
  "dev": "nodemon --inspect production/index.js"
},
```

### Development:

```js
npm start
```

```js
npm run dev
```
