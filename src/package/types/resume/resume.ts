import { RemoteFrequencies } from '../enums/remote/remote_utils';
import { JobIssues } from '../enums/job_issues/job_issues_utils';
import { ContractTypes } from '../enums/contract_types/contract_types';
import { JobSearchStates } from '../enums/job_serachstate/job_search_state';
import { AvailableCardsTypes } from '../../components/cards/utils/cards_order';
import { ResumeSchema } from '@kurone-kito/jsonresume-types';

export interface GifUser {
    name: string;
    profileUrl: string;
    isVerified: boolean;
    profileAvatarUrl: string;
}

export interface SpecificWeloveDevsBasics {
    visaSponsorship?: boolean;
    personalDescription?: string;
    globalJobTitle?: string;
}

export interface SpecificWeloveDevsDreamJob {
    locations: Array<{ name: string }>;
    remoteFrequency?: RemoteFrequencies;
}

export interface SpecificWeloveDevsCurrentJob {
    issues: { [key in JobIssues | string]: boolean };
}

export interface SpecificWeloveDevsEducation {
    studiesLevel?: number;
}

export interface SpecificWeloveDevsWork {
    contractTypes: ContractTypes[];
    codingYears: number;
    codingReason: string;
    searchState: JobSearchStates;
    experienceYears: number;
    codeExperienceYears?: number | null;
    otherExperienceYears?: number | null;
}

export interface SpecificWeloveDevsSound {
    embedUrl: string;
}

export interface SpecificWeloveDevsProps {
    basics: Partial<SpecificWeloveDevsBasics>;
    dreamJob: Partial<SpecificWeloveDevsDreamJob>;
    currentJob: Partial<SpecificWeloveDevsCurrentJob>;
    education: Partial<SpecificWeloveDevsEducation>;
    work: Partial<SpecificWeloveDevsWork>;
    sound: Partial<SpecificWeloveDevsSound>;
    interestedBy: string;
}

export interface ImageHeader {
    url: string;
    alt: string;
}

export interface CardsOrder {
    type: AvailableCardsTypes;
    variant: number;
}

export interface ResumeCustomization {
    imageHeader: ImageHeader;
    cardsOrder: CardsOrder[];
    fields?: {
        work?: {
            customDateFormat?: string;
        };
    };
}

export interface CustomResumeTypes {
    specific: Partial<SpecificWeloveDevsProps>;
    resumeCustomization: Partial<ResumeCustomization>;
}
export type DeveloperResume = ResumeSchema & CustomResumeTypes;
