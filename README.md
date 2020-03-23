<p align="center">
  <img src="https://cdn.filestackcontent.com/XlAH8XNyThOt0usnHTn3" width="400" />
</p>

<br />

# Developer-Profile by WeLoveDevs.com
**Developer-Profile** is an open-source customizable software developer resume to highlight your skills and experiences.

Discover a modern approach of the traditionnal CV that includes animations and latest front-end technologies. Impress recruiters or customers with your projects, hobbies and experiences as never before. 

We used [JSON Resume](https://github.com/jsonresume), a community driven open source initiative to create a JSON based standard for resumes. 
Discover the official schema [here](https://jsonresume.org/schema/).  
We added a few extra-fields to JSON Resume standard to fit developers needs. Learn more about them [here](#json-resume-extra-fields).

This app is built using the popular [create-react-app](https://github.com/facebook/create-react-app). You will find a lot of resources to understand how to edit and publish your resume directly on https://create-react-app.dev/

### Preview 

[![Resume Preview](https://cdn.filestackcontent.com/compress/resize=width:500/rfXY8TNARdao9DdQSaJe)](https://vincent-cotro.welovedevs.com)

### Getting started

Clone the repository

```
git clone https://github.com/welovedevs/developer-profile.git
```

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

### Features


### JSON-Resume Extra Fields

| Category     | Field name          | Type                                    | Description                                                                                                              |
|--------------|---------------------|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| basics       | visaSponsorship     | Boolean                                 | True if you need a visa sponsorship to work in your dream country.                                                       |
| basics       | personalDescription | String                                  | A short description that will be displayed below your name in the resume header. Example: "Passionate React Developer".  |
| dreamJob     | locations           | Array<{ name : string, title: string }> | Your dream job cities. Example: "San Francisco, US".                                                                     |
| work         | remote              | String                                  | Give here more information about the frequency if your dream job is a remote job. Example: "regularly"                   |
| education    | studiesLevel        | Number                                  | What is your highest level of formal education? (Bachelor = 3 years post graduate. Master = 5 years post graduate)       |
| work         | contractTypes       | Array<String>                           | Your dream job contract types. Example: ['fixedTerm', 'permanent', 'internship', 'apprenticeship', 'freelance'];         |
| work         | codingYears         | Number                                  | How long have you been coding (in years)? Example: 5                                                                     |
| work         | codingReason        | String                                  | What motivates you to wake up every day to code?                                                                         |
| work         | searchState         | String                                  | Are you open to new job opportunities? Can be 'activelySearching', 'openOpportunities', 'dreamjobOnly' or 'notSearching' |
| work         | experienceYears     | Number                                  | How many years of professional experience do you have?                                                                   |
| sound        | embedUrl            | String                                  | Your favorite Spotify playlist. Example: https://open.spotify.com/embed/playlist/37i9dQZF1DWWl7MndYYxge                  |
| interestedBy |                     | String                                  | What languages do you want to learn? Example: Angular and Vue.js                                                         |


### Edit your JSON Resume directly in the app



### Self-hosting

Instructions...

### Hosted for free on WeLoveDevs.com

 Instructions

### i18n 

The resume is currently available in English and in French. Feel free to contribute with your language translation file !   

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
 
 ### License
 
Developer Profile is relased under [GNU AGPL v3 license](https://github.com/welovedevs/developer-profile/blob/master/LICENSE.md)
 


## About WeLoveDevs.com
WeLoveDevs.com is a website crafted for developers (by Developers) looking for new career opportunities.
More than 1700 companies use WeLoveDevs.com to find their talents. 
Discover your next company [here](https://welovedevs.com/app/companies)

