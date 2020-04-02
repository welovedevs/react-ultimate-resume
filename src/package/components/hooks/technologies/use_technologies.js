import { useContext, useEffect } from 'react';

import { TECHNOLOGIES_RECEIVED, TECHNOLOGIES_STARTED } from '../../../store/technologies/technologies_actions_types';
import { StaticDataContext, StoreContext } from '../../../utils/context/contexts';

const DEFAULT_OBJECT = {};
export const useTechnologies = () => {
    const {
        technologies: [{ technologies }, dispatch]
    } = useContext(StoreContext);
    const { endpoints } = useContext(StaticDataContext);

    useEffect(() => {
        if (!endpoints.devicons) {
            dispatch({ type: TECHNOLOGIES_RECEIVED, technologies: DEFAULT_OBJECT });
            return;
        }
        if (technologies === null && endpoints.devicons) {
            dispatch({ type: TECHNOLOGIES_STARTED });
            // eslint-disable-next-line no-undef
            fetch(endpoints.devicons)
                .then((res) => {
                    if (res.status.toString().startsWith('2')) {
                        return res.json();
                    }
                    throw new Error(`${res.status} ${res.statusText}`);
                })
                .then((fetchedTechnologies) =>
                    dispatch({ type: TECHNOLOGIES_RECEIVED, technologies: fetchedTechnologies })
                )
                .catch((e) => {
                    console.error('Failed to fetch technologies', e);
                    dispatch({ type: TECHNOLOGIES_RECEIVED, technologies: DEFAULT_OBJECT });
                });
        }
    }, [technologies]);

    return { technologies };
};
