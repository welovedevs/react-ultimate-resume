import { DeveloperResume } from './resume/resume';
import React from 'react';

export interface ProfileOptions {
    locale?: 'fr' | 'en' | 'tr';
    side?: 'front' | 'back';
    showContactInfos?: boolean;
    apiKeys?: {
        giphy?: string;
    };
    endpoints?: {
        devicons?: string;
        unsplashProxy?: string;
    };
    maxSkills?: number;
    disableSortableExperience?: boolean;
    maxCardsPerRow?: number;
    customization?: DeveloperResume['resumeCustomization'];
    referenceData?: {
        professions?: string[];
    };
}
export interface DeveloperProfileProps {
    mode?: 'edit';
    data: DeveloperResume;
    onEdit?: (resume: DeveloperResume) => void;
    onCustomizationChanged?: (customization: DeveloperResume['resumeCustomization']) => void;
    options: ProfileOptions;
    classes?: {
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
    additionalNodes?: {
        banner?: {
            actionButtons?: React.ReactElement;
            name?: { after?: React.ReactElement };
            avatar?: React.ReactElement;
            userInformations?: React.ReactElement;
        };
        technologyPicker: {
            content: {
                additionalInformations: React.ReactElement;
                noResults: React.ReactElement;
            };
        };
        beforeCards: React.ReactElement;
        cards: {
            before: React.ReactElement;
            after: React.ReactElement;
            experiences: {
                back: {
                    experience: {
                        content: {
                            buildTitle: React.ReactElement;
                        };
                    };
                };
            };
        };
    };
}
