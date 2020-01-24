import React, { useState } from 'react';
import DeveloperProfile from './package';
import { Typography } from '@wld/ui/typography/typography';

function App() {
    const [flipped, setFlipped] = useState(false);
    return <DeveloperProfile options={{ flipped, apiKeys: { giphy: process.env.REACT_APP_GIPHY_API_KEY } }} />;
}

export default App;
