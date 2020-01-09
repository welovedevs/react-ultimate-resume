import React, { useState } from 'react';
import DeveloperProfile from './package';

function App() {
    const [flipped, setFlipped] = useState(false);
    return <DeveloperProfile options={{ flipped }} />;
}

export default App;
