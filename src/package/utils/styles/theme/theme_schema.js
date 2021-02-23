import * as yup from 'yup';

const isHex = yup.string().matches(/^#[0-9a-f]{3,6}$/i, 'Color shade must be written using the hex color syntax.');

const SHADES_SCHEMA = {
    ...[50, 100, 150, 200, 250, 300, 350, 400, 450, 550, 600, 650, 700, 750, 800, 850, 900].reduce(
        (acc, shade) => ({ ...acc, [shade]: isHex.notRequired() }),
        {}
    ),
    500: isHex.required()
};

const isExistingColorInPalette = yup.string().test(
    'is-existing-color-in-palette',
    (args) => `Color \`${args.value}\` must be present in palette.`,
    // eslint-disable-next-line func-names
    function (value) {
        return Boolean(this?.options?.context?.palette?.[value]);
    }
);

const CARD_VARIANT_SCHEMA = yup.object({
    backgroundColor: isExistingColorInPalette.required(),
    color: isExistingColorInPalette.required(),
    backBackgroundColor: isExistingColorInPalette.required(),
    backColor: isExistingColorInPalette.required()
});

export const THEME_SCHEMA = yup.object({
    palette: yup.lazy((colors = {}) =>
        yup.object(
            Object.keys(colors).reduce(
                (acc, name) => ({
                    ...acc,
                    [name]: yup.object({
                        ...SHADES_SCHEMA,
                        contrastDefaultColor: yup.string().required()
                    })
                }),
                {}
            )
        )
    ),
    miscellaneous: yup.object({
        backgroundColor: isHex.required(),
        color: isHex.required(),
        spacing: yup.number().required(),
        fontFamily: yup.array().of(yup.string())
    }),
    sizes: yup.object({
        small: yup.string().required(),
        medium: yup.string().required()
    }),
    components: yup.object({
        banner: yup.object({
            overlayColor: isExistingColorInPalette.required(),
            imageSource: yup.string().required()
        }),
        cards: yup.object({
            height: yup.number().required(),
            width: yup.number().required(),
            borderRadius: yup.number().required(),
            default: CARD_VARIANT_SCHEMA,
            variants: yup.array().of(CARD_VARIANT_SCHEMA).required()
        })
    })
});
