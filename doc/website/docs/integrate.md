# WeLoveDevs - Developer Profile

This package allow you to create a pretty and easy to use - _developer specific_ - profile without the usual strain that comes with it.
You can use, edit and do whatever you desire with it.

**However**, we understand not everyone have the time nor wants to deal with all this, this is why we decided to create a free SAAS version here.

We are open for feedbacks and will answers your issues as soon as we can.

Sections -

-   Install
-   Usage
-   Pull Requests & Coding Guideline

# Usage

You can integrate this profile as such:

```javascript
import { DeveloperProfile } from '@wld/developer-profile';

const ApplicationComponent = () => {
    return (
        <DeveloperProfile
            options={...}
            theme={...}
        />
    );
}

export const Application = ApplicationComponent;
```

If you want to use the google maps autocomplete api, please make sure to add

```html
<script
    type="text/javascript"
    src="https://maps.googleapis.com/maps/api/js?key=[YOUR_GMAPS_API_KEY]&libraries=places"
></script>
```

In the header of your HTML page.

If you want to use the GIPHY api, please make sure to provide a apikey.giphy to the options props of the profile

## Theming

We created a default theme based on WeLoveDevs' graphical identity.

You can modify this theme and create your own unique style.

Please see `utils/styles/theme/theme.js` for an example.

# Pull Requests & Coding Guideline

You can fork and edit this package as you desire.

If you want to create pull requests (💙) then following some rules will be highly appreciated:

## Props spreading

Even though we - at WeLoveDevs - really like spreading as much as we can, we decided to **NOT** spread components props as it can leads to quite a lot of side effects.

Example:

🚫 Do **not** write

```javascript
<Component {...{ key, data } />
```

✅ Do write

```javascript
<Component key={key} data={data} />
```

## Architecture

We use a project structure which, we believe, is the most readable.

```

```
