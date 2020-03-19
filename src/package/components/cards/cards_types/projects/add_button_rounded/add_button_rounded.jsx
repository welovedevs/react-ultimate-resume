import React from 'react';

import { BouncingRoundButton } from '../../../../commons/bouncing_round_button/bouncing_round_button';

import { ReactComponent as EditIcon } from '../../../../../assets/icons/add.svg';

const AddButtonComponent = ({ title = 'Ajouter', onClick }) => (
    <BouncingRoundButton title={title} icon={EditIcon} onClick={onClick} />
);

export const AddButton = AddButtonComponent;
