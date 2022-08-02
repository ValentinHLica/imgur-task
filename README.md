# ✨ 🖼️ Imgur Task ✨

## 🏃 Setup

1. Rename .env.example to .env and setup Imgur Authentication keys

2. Run the following command to start local server

```ssh
npm i && npm start
```

3. ⚠️ **Warning** Do not use **_*http://localhost:3000/*_** (Imgur gives 429 error for some reason), instead open ***http://192.168.x.x:3000/***

## 🪣 Requirements

- [x] pagination is a plus
- [ ] Implementing unit tests is a plus: Jest + react-testing-library / enzyme.
- [x] Provide a Readme file with documentation on your approach, including project local setup instructions.
- [x] Refactor
- [x] Code linter.
- [x] consume the Imgur API: https://api.imgur.com/ (check documentation for the api https://apidocs.imgur.com)
- [x] show gallery images in a grid of thumbnails;
- [x] show image description in the thumbnail, top or bottom;
- [x] allow selecting the gallery section: hot, top, user;
- [x] allow including / excluding viralimages from the result set;
- [x] allow specifying window and sort parameters;
- [x] when clicking an image in the gallery - show its details: big image, title, description, upvotes, downvotes and score.
- [x] Use React/Redux (preferably), Vue.js or other similar js frameworks.
- [x] Styling: sass, styled-components, css modules (your choice).
- [x] Typescript is a plus.
- [x] Hosting the website on the service of your choice is a plus.

## 📝 Resources

- [Create React App project with TypeScript](https://create-react-app.dev/docs/adding-typescript/)
- [Getting Started with Redux](https://redux.js.org/tutorials/quick-start)
- [ESLint with VSCode, Prettier, Husky and React For Beginners](https://www.youtube.com/watch?v=ZXW6Jn6or1w)
