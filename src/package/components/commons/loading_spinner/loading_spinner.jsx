import React, { useMemo } from 'react';

import { WaveLoading } from 'respinner';

import { getHexFromPaletteColor } from '../../../utils/styles/styles_utils';
import { useTheme } from "@mui/styles";

const LoadingSpinnerComponent = ({ color = 'primary', height = null }) => {
    const theme = useTheme();
    const colorHex = useMemo(() => getHexFromPaletteColor(theme, color), [theme, color]);
    return <WaveLoading height={height} stroke={colorHex} strokeWidth={3} count={2} />;
};

export const LoadingSpinner = LoadingSpinnerComponent;
