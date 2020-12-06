export namespace Options {
    interface DefaultOptions {
        locale: 'en' | 'fr' | 'tr';
        customization: {
            imageHeader: {
                url: string;
                alt: string;
            };
        };
        maxCardsPerRow: number | null;
        showContactInfos: boolean;
        dismissFooter: boolean;
    }
}
