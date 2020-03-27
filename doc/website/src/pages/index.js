import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        location.href = '/docs/home';
    });
    return null;
}

export default Home;
