# Standalone Deploying your Resume Template

Deploying this component on your own server is a very valid option 😁

## First Fork Us !

Use the fork button on [the main project](https://github.com/welovedevs/react-ultimate-resume)

You get your very own fork of the [project like mine](https://github.com/thedamfr/react-ultimate-resume).

[![My Fork Preview](http://cdn.filestackcontent.com/compress/zyZVEY7oQpiWtG8TpNVH)](https://github.com/thedamfr/react-ultimate-resume)

`git clone` this fork

Enter the repository and run `yarn install` and open it your favorite code editor.

## Add your JSONResume

JSONResume is an open scheme for resume. We added a few extra fields, refer to the main documentation to learn more.

Export your JSONResume from WeLoveDevs.com or any website supporting the schema.

I highly recommend working on a separate branch with you own data.

`git checkout -b my_new_branch`

We provide the JsonResume to the component in `App.jsx`. Feel free to edit the `src/data/json_stub.json` or to provide your own component via an API or such.

Test it out :

```
yarn start
```

And visit http://localhost:3000

![my localhost 3000](https://cdn.filestackcontent.com/compress/HFY4XDmXSKao67F7BSAY)

## BUILD

🚔 Use `yarn build` 🚓

You may serve your `build` folder locally :

`yarn serve`

Visit http://localhost:5000


![my localhost 5000](https://cdn.filestackcontent.com/compress/5AvmoO3RL2CDma7TgFMl)

## Deploy

### Deploy over OVH Webhosting (Mutu)

First, 1 Buy a domain name and hosting : https://www.ovh.com/fr/domaines/

![screenshot of me buying a domain name](https://cdn.filestackcontent.com/compress/chTULO9SyioYoRouaTnb)

Pick a WebHosting solution. I'm using a [Perso](https://www.ovh.com/fr/hebergement-web/hebergement-perso.xml)

Push over via FTP : Upload your `build` folder where it should belong

![Screenshot of Filezilla](https://cdn.filestackcontent.com/compress/tzDoryAS7q1DbXZeTUk9)

And tada : https://www.damien-cavailles.fr/

[![Screenshot of the website](https://cdn.filestackcontent.com/compress/ybRS2qaRwmFIZCGCC6HD)](https://www.damien-cavailles.fr/)


### Deploy on Github Pages

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
