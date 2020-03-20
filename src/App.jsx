import React, { useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import merge from 'lodash/merge';
import { Button } from '@wld/ui';

import isArray from 'lodash/isArray';
import mergeWith from 'lodash/mergeWith';
import cloneDeep from 'lodash/cloneDeep';
import DeveloperProfile from './package';
import JsonStub from './data/json_stub.json';

const DEFAULT_CARD_ORDER = [
    { type: 'basics', variant: 4 },
    { type: 'skills', variant: 0 },
    { type: 'dreamjob', variant: 4 },
    { type: 'projects', variant: 4 },
    { type: 'experiences', variant: 4 },
    { type: 'studies', variant: 4 },
    { type: 'gifs', variant: 0 },
    { type: 'interestedBy', variant: 3 },
    { type: 'language', variant: 4 },
    { type: 'soundtrack', variant: 4 }
];

const mergeFunction = (objValue, srcValue) => {
    if (!objValue || isArray(objValue)) {
        return srcValue;
    }
    return merge(objValue, srcValue);
};

function App() {
    const [data, setData] = useState(JsonStub);
    const [isEditing, setIsEditing] = useState(false);

    const onEdit = useCallback(newData => setData(mergeWith(cloneDeep(data), newData, mergeFunction)), [
        JSON.stringify(data)
    ]);
    const [customization, setCustomization] = useState({ cardsOrder: DEFAULT_CARD_ORDER });

    const onCustomizationChanged = useCallback(setCustomization, [data]);
    return (
        <DeveloperProfile
            mode="readOnly"
            data={data}
            onEdit={onEdit}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            onCustomizationChanged={onCustomizationChanged}
            options={{
                // side: 'back',
                apiKeys: {
                    giphy: process.env.REACT_APP_GIPHY_API_KEY
                },
                endpoints: {
                    devicons:
                        'https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/technologies%2Ftechnologies_list.json?alt=media&token=459028ba-d9bc-4480-a3c4-88633afab7e2',
                    unsplashProxy: 'https://us-central1-test-project-412e3.cloudfunctions.net/unsplash-unsplashProxy'
                },
                customization
            }}
            additionalNodes={{
                banner: {
                    actionsButtons: (
                        <>
                            <Button
                                style={{ color: '#fff' }}
                                variant="outlined"
                                onClick={() => setIsEditing(!isEditing)}
                            >
                                <FormattedMessage id="Edit" defaultMessage="Edit" />
                            </Button>
                        </>
                    )
                }
            }}
        />
    );
}

export default App;
