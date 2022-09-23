import React, { createContext, useReducer } from 'react';
import { DeveloperResume } from '../../types/resume/resume';
import { DeveloperProfileProps, ProfileOptions } from '../../types/props';

export const DeveloperProfileContext = createContext<{
    data: DeveloperResume;
    isEditing: boolean;
    setIsEditing: (boolean: string) => void;
    onEdit: (newValue: Partial<DeveloperResume>) => void;
    onCustomizationChanged: (newValue: DeveloperResume['resumeCustomization']) => void;
    onFilesUpload: () => void;
    mode: 'edit';
}>({} as any);
export const StoreContext = createContext<{ technologies: typeof useReducer }>({} as any);

type StaticDataContextType = {
    apiKeys: ProfileOptions['apiKeys'];
    endpoints: ProfileOptions['endpoints'];
    additionalNodes?: DeveloperProfileProps['additionalNodes'];
    receivedGlobalClasses: DeveloperProfileProps['classes'];
    customization: DeveloperResume['resumeCustomization'];
    options: Pick<ProfileOptions, 'showContactInfos' | 'maxSkills' | 'disableSortableExperience'>;
    referenceData: ProfileOptions['referenceData'];
};
export const StaticDataContext = createContext<Partial<StaticDataContextType>>({});
