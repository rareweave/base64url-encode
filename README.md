# Base64Url encode

Zero dependency base64-urlsafe encoder that doesn't need node's Buffer and has full support for unicode characters.

Installation:

```sh
npm install base64url-encode
# OR
yarn add base64url-encode
# OR
pnpm install base64url-encode
```

Use:

```js
let b64urlEncode=require("base64url-encode")

console.log(b64urlEncode("test")) //logs "dGVzdA"

```
