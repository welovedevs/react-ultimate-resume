import React, { createContext, useReducer } from 'react';
import { DeveloperResume } from '../../types/resume/resume';

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
    apiKeys: { giphy: string; unsplash: string };
    endpoints: {
        devIcons: string;
        unsplashProxy: string;
    };
    additionalNodes?: {
        banner?: {
            actionsButtons?: React.ReactNode;
            userInformations?: React.ReactNode;
            avatar?: React.ReactNode;
            name?: {
                after: React.ReactNode;
            };
        };
        technologyPicker: {
            content: React.ReactNode;
        };
        cards?: {
            before?: React.ReactNode;
            after?: React.ReactNode;
            experience?: {
                back?: {
                    experience?: {
                        content?: {
                            buildTitle?: string;
                        };
                    };
                };
            };
        };
    };
    receivedGlobalClasses: {
        banner?: {
            avatar: {
                container: string;
                image: string;
            };
            editHeaderImageButton?: string;
            container?: string;
            overlay?: string;
            contents?: string;
            credits?: string;
        };
    };
    customization: DeveloperResume['resumeCustomization'];
    options: {
        showContactInfos?: boolean;
        maxSkills?: number;
        disableSortableExperience?: boolean;
    };
};
export const StaticDataContext = createContext<Partial<StaticDataContextType>>({});
