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
            options={{
                flipped,
                apiKeys: { giphy: process.env.REACT_APP_GIPHY_API_KEY },
                endpoints: {
                    devicons:
                        'https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/technologies%2Ftechnologies_list.json?alt=media&token=459028ba-d9bc-4480-a3c4-88633afab7e2'
                }
            }}
        />
    );
}

export default App;
