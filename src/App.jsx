import React, { useCallback, useState } from 'react';
import DeveloperProfile from './package';
import JsonStub from './data/json_stub.json';

import merge from 'lodash/merge';

function App() {
    const [flipped, setFlipped] = useState(false);
    const [data, setData] = useState(JsonStub);

    const onEdit = useCallback(
        newData => {
            setData(merge({}, data, newData));
        },
        [data]
    );
    return (
        <DeveloperProfile
            data={data}
            onEdit={onEdit}
            options={{ flipped, apiKeys: { giphy: process.env.REACT_APP_GIPHY_API_KEY } }}
        />
    );
}

export default App;
