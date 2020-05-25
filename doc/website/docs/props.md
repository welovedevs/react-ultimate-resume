---
id: props
title: Props
sidebar_label: Props
---

## Input props

### Props

|     **Parameter**      |      **Type**      |                                                                  **Description**                                                                  |
| :--------------------: | :----------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: |
|          mode          | "edit"\|"readOnly" | Use this to activate or disable the Edit mode. In "edit" mode you will be able to update and customize your resume. Use "readOnly" in production. |
|          data          |     JSONResume     |                                                        This is your stringified JSONResume                                                        |
|        options         |       Object       |                                                See options for more informations [here](#options)                                                 |
| onCustomizationChanged |      Callback      |                                          Get the current customization if the customization is updated.                                           |
|    additionalNodes     |       Object       |      Additional nodes is used to add react components directly inside the resume. This is an advanced feature that will be documented later.      |

#### Options object

| **Parameter**  |                   **Type**                   |                                   **Description**                                    |
| :------------: | :------------------------------------------: | :----------------------------------------------------------------------------------: |
|     locale     |                  "fr"\|"en"                  |                           Resume locale (Default to "en")                            |
|      side      |               "front"\|"back"                |                          Force cards side (Default to none)                          |
|    apiKeys     |              { giphy : string }              |         Api keys for 3thd party librairies. For instance Giphy in edit mode.         |
|    endpoint    | { devicons : string, unsplashProxy: string } | Endpoints for 3thd party services. Used to get the technology list and use unsplash. |
| customization  |                    Object                    |                            Current resume customization.                             |
| maxCardsPerRow |                    number                    |                Number of cards per row in the grid (defaults to none)                |
| dismissFooter  |                   boolean                    |                            Hide footer (defaults to none)                            |

### JSON-Resume Extra Fields

| **Category** |   **Field name**    |                                       **Type**                                       |                                                     **Description**                                                     |
| :----------: | :-----------------: | :----------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
|    basics    |   visaSponsorship   |                                       Boolean                                        |                           True if you need a visa sponsorship to work in your dream country.                            |
|    basics    | personalDescription |                                        String                                        | A short description that will be displayed below your name in the resume header. Example: "Passionate React Developer". |
|   dreamJob   |      locations      |                       Array<{ name : string, title: string }>                        |                                  Your dream job cities. Example: "San Francisco, US".                                   |
|     work     |       remote        |                                        String                                        |         Give here more information about the frequency if your dream job is a remote job. Example: "regularly"          |
|  education   |    studiesLevel     |                                        Number                                        |   What is your highest level of formal education? (Bachelor = 3 years post graduate. Master = 5 years post graduate)    |
|     work     |    contractTypes    | Array<"fixedTerm" \| "permanent" \| "internship" \| "apprenticeship" \| "freelance"> |                                  Your dream job contract types. Example: ['fixedTerm']                                  |
|     work     |     codingYears     |                                        Number                                        |                                  How long have you been coding (in years)? Example: 5                                   |
|     work     |    codingReason     |                                        String                                        |                                    What motivates you to wake up every day to code?                                     |
|     work     |     searchState     |    "activelySearching" \| "openOpportunities" \| "dreamjobOnly" \| "notSearching"    |                                         Are you open to new job opportunities?                                          |
|     work     |   experienceYears   |                                        Number                                        |                                 How many years of professional experience do you have?                                  |
|    sound     |      embedUrl       |                                        String                                        |                                             Your favorite Spotify playlist.                                             |
| interestedBy |                     |                                        String                                        |                            What languages do you want to learn? Example: Angular and Vue.js                             |
