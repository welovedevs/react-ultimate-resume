<p align="center">
  <img src="https://cdn.filestackcontent.com/compress/fyFHRMfCRL2xhwCVtx0F" width="400" />
</p>

<br />

# react-ultimate-resume by WeLoveDevs.com
**react-ultimate-resume** is an open-source customizable software developer resume to highlight your skills and experiences.

Discover a modern approach of the traditionnal CV that includes animations and latest front-end technologies. Impress recruiters or customers with your projects, hobbies and experiences as never before.

We used [JSON Resume](https://github.com/jsonresume), a community driven open source initiative to create a JSON based standard for resumes.
Discover the official schema [here](https://jsonresume.org/schema/).
We added a few extra-fields to JSON Resume standard to fit developers needs. Learn more about them [here](#json-resume-extra-fields).

This app is built using the popular [create-react-app](https://github.com/facebook/create-react-app). You will find a lot of resources to understand how to edit and publish your resume directly on https://create-react-app.dev/


### Preview

[![Resume Preview](https://cdn.filestackcontent.com/compress/resize=width:500/rfXY8TNARdao9DdQSaJe)](https://vincent-cotro.welovedevs.com)

### Docs

Docs can be found [Here](https://welovedevs.com/react-ultimate-resume/docs/home). 

Feel free to improve it with a PR ♥️

### Features

The resume is designed with 10 Cards (we plan to add more !)
- 🙂 Basics: Your basics : Where are you ? When did you start coding ...
- 📊 Skills: Beautiful Graphs to show your skills
- 💼 Dream job: Explain easily to recruiters what is your dream job
- 💾 Experiences: Describe your professional experiences
- 🎓 Studies: How did you learn to code ?
- ✨ Projects: Highlight your best projects
- 📺 Hobbies: Show your hobbies with GIF !
- 🎶 Music: Add your favorite Spotify Playlist
- 🔭 Interested by: Tell more about technologies you would love to learn
- 🌎 Languages: What language do you master?

Each cards comes with an edit dialog to edit your JSON Resume directly inside the app


### Customize your Profile

🎨 This resume is fully customizable with an included set of nice color palettes :

![Customize your profile](https://cdn.filestackcontent.com/compress/uQLHC4eTRKuJ24NoJNkS)


### Getting started

Fork this repository. `git clone` your fork 💪

Install

```
yarn install
```

Run

```
yarn start
```

Replace the default JSON Resume with yours
```
/src/data/json_stub.json
```

### Deploy on you own server

You can deploy your resume on your own server in few minutes. Follow our [HOW TO documentation](https://welovedevs.com/react-ultimate-resume/docs/deploy-fork). 

### Parameters

**Parameter**|**Type**|**Description**
:-----:|:-----:|:-----:
mode|"edit" \| "readOnly"|Use this to activate or disable the Edit mode. In "edit" mode you will be able to update and customize your resume. Use "readOnly" in production.
data|JSONResume|This is your stringified JSONResume
options|Object|See options for more informations [here](#options)
onCustomizationChanged|Callback|Get the current customization if the customization is updated.
additionalNodes|Object|Additional nodes is used to add react components directly inside the resume. This is an advanced feature that will be documented later.



#### Options

**Parameter**|**Type**|**Description**
:-----:|:-----:|:-----:
locale|"fr" \| "en"|Resume locale (Default to "en")
side|"front" \| "back"|Cards default side (Default to "front")
apiKeys|{ giphy : string }|Api keys for 3thd party librairies. For instance Giphy in edit mode.
endpoint|{ devicons : string, unsplashProxy: string }|Endpoints for 3thd party services. Used to get the technology list and use unsplash.
customization|Object|Current resume customization.


### JSON-Resume Extra Fields

**Category**|**Field name**|**Type**|**Description**
:-----:|:-----:|:-----:|:-----:
basics|visaSponsorship|Boolean|True if you need a visa sponsorship to work in your dream country.
basics|personalDescription|String|A short description that will be displayed below your name in the resume header. Example: "Passionate React Developer".
dreamJob|locations|Array<{ name : string, title: string }>|Your dream job cities. Example: "San Francisco, US".
work|remote|String|Give here more information about the frequency if your dream job is a remote job. Example: "regularly"
education|studiesLevel|Number|What is your highest level of formal education? (Bachelor = 3 years post graduate. Master = 5 years post graduate)
work|contractTypes| Array<"fixedTerm" \| "permanent" \| "internship" \| "apprenticeship" \| "freelance">|Your dream job contract types. Example: ['fixedTerm']
work|codingYears|Number|How long have you been coding (in years)? Example: 5
work|codingReason|String|What motivates you to wake up every day to code?
work|searchState|"activelySearching" \| "openOpportunities" \| "dreamjobOnly" \| "notSearching"   |Are you open to new job opportunities?
work|experienceYears|Number|How many years of professional experience do you have?
sound|embedUrl|String|Your favorite Spotify playlist.
interestedBy| |String|What languages do you want to learn? Example: Angular and Vue.js


### Hosted for free on WeLoveDevs.com

Don't want to host your profile ?  
Create your JSONResume and get your free subdomain in less than 10 minutes by registering on [welovedevs.com](https://welovedevs.com/app/register_developer).

We added a few extra features that you will love :
- ⚡ Server side rendering for ultra fast loading
- 🔒 Secured using reCAPTCHA v3, HTTPS and Cloudflare

### i18n

The resume is currently available in English and in French. Feel free to contribute with your language translation file !   

### Built by the community 💖

https://web-develop.me/ - by [@liorchalma](https://github.com/liorchamla)

### Contributors
This project exists thanks to all the people who contribute.
<table>
  <tr>
<td align="center"><a href="https://github.com/thomasgrivet"><img src="https://avatars.githubusercontent.com/u/18561703?v=3" width="100px;" alt=""/><br /><sub><b>Thomas Grivet</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/clementdevos"><img src="https://avatars.githubusercontent.com/u/5870982?v=3" width="100px;" alt=""/><br /><sub><b>Clément Devos</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/VincentCtr"><img src="https://avatars.githubusercontent.com/u/9655206?v=3" width="100px;" alt=""/><br /><sub><b>Vincent Cotro</b></sub></a><br /></td>
<td align="center"><a href="https://github.com/catrx"><img src="https://avatars.githubusercontent.com/u/6273310?v=3" width="100px;" alt=""/><br /><sub><b>Antonin Catrix</b></sub></a><br /></td>
  </tr>
 </table>

Chat with us on [Discord](https://discord.gg/udbbbAq) !


 ### License

react-ultimate-resume is relased under [GNU AGPL v3 license](https://github.com/welovedevs/developer-profile/blob/master/LICENSE.md)



## About WeLoveDevs.com
WeLoveDevs.com is a website crafted for developers (by Developers) looking for new career opportunities.
More than 1700 companies use WeLoveDevs.com to find their talents.
Discover your next company [here](https://welovedevs.com/app/companies)
