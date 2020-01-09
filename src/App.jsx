import React, { useState } from 'react';
import DeveloperProfile from './package';

function App() {
    const [flipped, setFlipped] = useState(false);
    return (
        <div className="App">
            <DeveloperProfile options={{ flipped }} />
        </div>
    );
}

export default App;
