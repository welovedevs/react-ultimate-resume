import { useCallback, useEffect, useRef, useState } from 'react';

const DEFAULT_OPTIONS = Object.freeze({
    type: ['(cities)']
});

export const useGoogleMapsPredictions = (input, options = DEFAULT_OPTIONS) => {
    const timer = useRef();
    const autoCompleteService = useRef(null);
    const [predictions, setPredictions] = useState([]);
    const handlePlacesPredictionsUpdate = useCallback((receivedPredictions, status) => {
        // eslint-disable-next-line no-undef
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
            setPredictions([]);
            return;
        }
        const filteredPredictions = receivedPredictions.filter(p => p.types && !p.types.includes('country'));
        setPredictions(filteredPredictions);
    }, []);
    useEffect(() => {
        if (typeof google !== 'undefined') {
            try {
                // eslint-disable-next-line no-undef
                autoCompleteService.current = new google.maps.places.AutocompleteService();
            } catch (e) {
                console.error('Failed to init google maps autocomplete service', e);
            }
        }
    }, []);
    useEffect(() => {
        if (!autoCompleteService.current) {
            return;
        }
        if (!input) {
            setPredictions([]);
            return;
        }
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(
            autoCompleteService.current.getPlacePredictions(
                {
                    input,
                    ...options
                },
                handlePlacesPredictionsUpdate
            ),
            200
        );
    }, [input, autoCompleteService.current]);
    return { predictions };
};
