import React, { useCallback, useState } from 'react';
import merge from 'lodash/merge';

import isArray from 'lodash/isArray';
import mergeWith from 'lodash/mergeWith';
import cloneDeep from 'lodash/cloneDeep';
import DeveloperProfile from './package';
import JsonStub from './data/json_stub.json';

const mergeFunction = (objValue, srcValue) => {
    if (!objValue || isArray(objValue)) {
        return srcValue;
    }
    return merge(objValue, srcValue);
};

function App() {
    const [data, setData] = useState(JsonStub);

    const onEdit = useCallback(newData => setData(mergeWith(cloneDeep(data), newData, mergeFunction)), [
        JSON.stringify(data)
    ]);
    const [customization, setCustomization] = useState({});

    const onCustomizationChanged = useCallback(setCustomization, [data]);

    return (
        <DeveloperProfile
            mode="readOnly"
            data={data}
            onEdit={onEdit}
            onCustomizationChanged={onCustomizationChanged}
            options={{
                // side: 'back',
                apiKeys: {
                    giphy: process.env.REACT_APP_GIPHY_API_KEY
                },
                endpoints: {
                    devicons:
                        'https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/technologies%2Ftechnologies_list.json?alt=media&token=459028ba-d9bc-4480-a3c4-88633afab7e2'
                },
                customization
            }}
        />
    );
}

export default App;
