import { RemoteFrequencies } from '../enums/remote/remote_utils';
import { JobIssues } from '../enums/job_issues/job_issues_utils';
import { ContractTypes } from '../enums/contract_types/contract_types';
import { JobSearchStates } from '../enums/job_serachstate/job_search_state';
import { AvailableCardsTypes } from '../../components/cards/utils/cards_order';

export interface Location {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
}

interface BaseSocialAccount {
    id: string;
}
export interface CustomSocialAccount extends BaseSocialAccount {
    network: string;
    url: string;
}
export interface TwitterSocialAccount extends BaseSocialAccount {
    network: 'twitter';
    username: string;
}
export interface CodingameSocialAccount extends BaseSocialAccount {
    network: 'codingame';
    username: string;
}
export interface GithubSocialAccount extends BaseSocialAccount {
    network: 'github';
    username: string;
}
export interface LinkedinSocialAccount extends BaseSocialAccount {
    network: 'linkedin';
    url: string;
}

export type DeveloperSocialAccounts =
    | CustomSocialAccount
    | TwitterSocialAccount
    | CodingameSocialAccount
    | GithubSocialAccount
    | LinkedinSocialAccount;
export interface Basics {
    name: string;
    label: string;
    picture: string;
    email: string;
    phone: string;
    website: string;
    summary: string;
    location: Location;
    profiles: DeveloperSocialAccounts[];
}

export interface Work {
    name: string;
    position: string;
    website: string;
    startDate: string;
    summary: string;
    location: string;
    highlights: string[];
    endDate: string;
}

export interface Volunteer {
    organization: string;
    position: string;
    website: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

export interface Education {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    gpa: string;
    courses: string[];
}

export interface Award {
    title: string;
    date: string;
    awarder: string;
    summary: string;
}

export interface Publication {
    name: string;
    publisher: string;
    releaseDate: string;
    website: string;
    summary: string;
}

export interface Skill {
    name: string;
    level: string;
    value: number;
    keywords: string[];
}

export interface Language {
    language: string;
    value: number;
    fluency: string;
}

export interface GifUser {
    name: string;
    profileUrl: string;
    isVerified: boolean;
    profileAvatarUrl: string;
}

export interface Interest {
    name: string;
    gifUrl: string;
    id: string;
    gifUser: GifUser;
}

export interface Reference {
    name: string;
    reference: string;
}

export interface Date {
    month: number;
    year: number;
}

export interface Image {
    url: string;
}

export interface Project {
    index: number;
    date: Date;
    description: string;
    id: string;
    images: Image[];
    link: string;
    name: string;
    endDate: string;
}

export interface SpecificWeloveDevsBasics {
    visaSponsorship: boolean;
    personalDescription: string;
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
    basics: SpecificWeloveDevsBasics;
    dreamJob: SpecificWeloveDevsDreamJob;
    currentJob: SpecificWeloveDevsCurrentJob;
    education: SpecificWeloveDevsEducation;
    work: SpecificWeloveDevsWork;
    sound: SpecificWeloveDevsSound;
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

export interface DeveloperResume {
    basics: Partial<Basics>;
    work: Partial<Work[]>;
    volunteer: Partial<Volunteer[]>;
    education: Partial<Education[]>;
    awards: Partial<Award[]>;
    publications: Partial<Publication[]>;
    skills: Partial<Skill[]>;
    languages: Partial<Language[]>;
    interests: Partial<Interest[]>;
    references: Partial<Reference[]>;
    projects: Partial<Project[]>;
    specific: Partial<SpecificWeloveDevsProps>;
    resumeCustomization: Partial<ResumeCustomization>;
}
