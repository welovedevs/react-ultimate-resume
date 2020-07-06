import React from 'react';

import { BouncingRoundButton } from '../../../../commons/bouncing_round_button/bouncing_round_button';

import { ReactComponent as SortIcon } from '../../../../../assets/icons/sort.svg';

export const SortButtonRounded = ({ title = 'Sort', onClick, classes: receivedClasses = {} }) => (
    <BouncingRoundButton title={title} icon={SortIcon} onClick={onClick} classes={receivedClasses} />
);
