---
id: deploy-github
title: Deploy on Github
---

## Deploy on Github Pages

Github Pages is great and reliable. Since your fork is public, you can have a gh-pages attached for free.

Your page is going to be on a domain following this pattern `https://{your_github_username}.github.io/react-ultimate-resume/`

`create-react-app` is supporting `gh-pages` out of the box and we made it even easier for you.

Everything is included in dependencies. It's only two step 👍

First :
Add a homepage field in the `package.json` : `"homepage" : "https://{your_github_username}.github.io/react-ultimate-resume/"`

Then : `yarn gh-deploy`

```
yarn run v1.22.4
$ yarn build && gh-pages build -D
$ react-scripts build
Creating an optimized production build...
[BABEL] Note: The code generator has deoptimised the styling of /Users/thedamfr/dev/project/react-ultimate-resume/src/package/assets/cards/hobbies.svg as it exceeds the max of 500KB.
[BABEL] Note: The code generator has deoptimised the styling of undefined as it exceeds the max of 500KB.
Compiled with warnings.

# Stuffs about prettier


File sizes after gzip:

  841.27 KB (+13 B)  build/static/js/main.9cf79e4b.chunk.js
  495.94 KB          build/static/js/2.0d4eb627.chunk.js
  1.28 KB (+15 B)    build/static/css/main.794802cd.chunk.css
  800 B (+15 B)      build/static/js/runtime-main.24935a95.js

The bundle size is significantly larger than recommended.
Consider reducing it with code splitting: https://goo.gl/9VhYWB
You can also analyze the project dependencies: https://goo.gl/LeUzfb

The project was built assuming it is hosted at /react-ultimate-resume/.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.

Find out more about deployment here:

  bit.ly/CRA-deploy

Published
✨  Done in 36.29s.
```

And here we go : https://thedamfr.github.io/react-ultimate-resume/

## Let us know about it !

Send us an email to show us what you've built : yourfriends@welovedevs.com

Join us on [Discord](https://discord.gg/udbbbAq) !
