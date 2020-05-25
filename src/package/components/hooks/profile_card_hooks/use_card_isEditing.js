import { useContext } from 'react';

import { ProfileCardContext } from '../../commons/profile_card/profile_card';

export const useCardIsEditing = () => {
    const {
        state: { isEditing }
    } = useContext(ProfileCardContext);
    return [isEditing];
};
