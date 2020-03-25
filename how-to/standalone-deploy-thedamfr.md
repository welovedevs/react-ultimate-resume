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

### Deploy on OVH Webhosting (Mutu)

#### 1 Buy a domain name and hosting

https://www.ovh.com/fr/domaines/

![screenshot of me buying a domain name](https://cdn.filestackcontent.com/compress/chTULO9SyioYoRouaTnb)

Pick a WebHosting solution. I'm using a [Perso](https://www.ovh.com/fr/hebergement-web/hebergement-perso.xml)

#### Deploy via FTP

Upload your `build` folder where it should belong

![Screenshot of Filezilla](https://cdn.filestackcontent.com/compress/tzDoryAS7q1DbXZeTUk9)

And tada : https://www.damien-cavailles.fr/

[![Screenshot of the website](https://cdn.filestackcontent.com/compress/ybRS2qaRwmFIZCGCC6HD)](https://www.damien-cavailles.fr/)


## Let us know about it !

Send us an email to show us what you've built : yourfriends@welovedevs.com

Join us on [Discord](https://discord.gg/udbbbAq) !
