import React, { useState } from 'react';
import { DeveloperProfile } from './component/components/profile';

function App() {
    const [flipped, setFlipped] = useState(false);
    return (
        <div className="App">
            <div onClick={() => setFlipped(!flipped)}>
                <input type="checkbox" checked={flipped} name="checkbox" />
                Flip all the cards
            </div>
            <DeveloperProfile options={{ flipped }} />
        </div>
    );
}

export default App;
