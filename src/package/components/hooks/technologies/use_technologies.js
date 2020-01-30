import { useContext, useEffect, useReducer } from 'react';
import { technologiesInitialState, technologiesReducer } from '../../../store/technologies/technologies_reducer';
import { DeveloperProfileContext } from '../../profile';
import { TECHNOLOGIES_RECEIVED } from '../../../store/technologies/technologies_actions_types';

export const useTechnologies = () => {
    const {
        endpoints,
        store: {
            technologies: [{ technologies }, dispatch]
        }
    } = useContext(DeveloperProfileContext);

    useEffect(() => {
        if (!endpoints.devicons) {
            dispatch({ type: TECHNOLOGIES_RECEIVED, technologies: {} });
        }
        if (technologies === null && endpoints.devicons) {
            // eslint-disable-next-line no-undef
            fetch(endpoints.devicons)
                .then(res => {
                    if (res.status.toString().startsWith('2')) {
                        return res.json();
                    }
                    throw new Error(`${res.status} ${res.statusText}`);
                })
                .then(fetchedTechnologies =>
                    dispatch({ type: TECHNOLOGIES_RECEIVED, technologies: fetchedTechnologies })
                )
                .catch(e => {
                    console.error('Failed to fetch technologies', e);
                    dispatch({ type: TECHNOLOGIES_RECEIVED, technologies: {} });
                });
        }
    }, [technologies]);

    return { technologies };
};
