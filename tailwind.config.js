const palettes = require('@welovedevs/ui/styles/palette');

module.exports = {
    mode: 'jit',
    content: ['./src/package/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                '2xl': { max: '1535px' },
                xl: { max: '1279px' },
                lg: { max: '1023px' },
                md: { max: '768px' },
                sm: { max: '500px' },
                profileMobile: { max: '700px' }
            },
            spacing: {
                0: '0px',
                '1/2': '4px',
                1: '8px',
                '1.5': '12px',
                2: '16px',
                '2.5': '20px',
                3: '24px',
                '3.5': '28px',
                4: '32px',
                5: '40px',
                6: '48px',
                7: '56px',
                8: '64px',
                9: '72px',
                10: '80px',
                11: '88px',
                12: '104px',
                13: '112px',
                14: '120px',
                15: '128px',
                16: '136px',
                17: '144px',
                18: '152px',
                19: '160px',
                20: '168px',
                21: '176px',
                22: '184px',
                23: '192px',
                24: '200px'
            },
            margin: {
                0: '0px'
            },
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                '4/5': '80%',
                '9/10': '90%'
            },
            width: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                '4/5': '80%',
                '9/10': '90%',
                reset: 'unset'
            },
            colors: {
                ...palettes,
                white: '#FFF',
                black: '#000'
            }
        }
    },
    variants: {
        extend: {}
    },
    corePlugins: {
        preflight: false
    },
    plugins: []
};
