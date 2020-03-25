import React, { useMemo } from 'react';

import { useTheme } from 'react-jss';
import { WaveLoading } from 'respinner';

import { getHexFromPaletteColor } from '../../../utils/styles/styles_utils';

const LoadingSpinnerComponent = ({ color = 'primary', height }) => {
    const theme = useTheme();
    const colorHex = useMemo(() => getHexFromPaletteColor(theme, color), [theme, color]);
    return <WaveLoading height={height} stroke={colorHex} strokeWidth={3} count={2} />;
};

export const LoadingSpinner = LoadingSpinnerComponent;
