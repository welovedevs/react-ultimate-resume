import React, { memo } from 'react';

import cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { FormattedMessage, useIntl } from 'react-intl';

import { Tooltip } from '@welovedevs/ui';
import { useMediaQuery } from '@material-ui/core';

import { ShareLinks } from './share_links/share_links';

import { ReactComponent as Logo } from '../../assets/icons/brands/welovedevs.svg';
import { ReactComponent as GithubLogo } from '../../assets/icons/brands/github.svg';

import { styles } from './footer_styles';

const useStyles = createUseStyles(styles);

const Backlinks = () => {
    const classes = useStyles();

    const { locale } = useIntl();
    return (
        <div className={classes.backlinksContainer}>
            <a href={`https://welovedevs.com/app/${locale === 'fr' ? 'fr/' : ''}jobs`}>
                <FormattedMessage id="Footer.backlinks.jobs" defaultMessage="See developer jobs" />
            </a>
            <a href={`https://welovedevs.com/app/${locale === 'fr' ? 'fr/' : ''}tests`}>
                <FormattedMessage id="Footer.backlinks.test" defaultMessage="Train on developers tests" />
            </a>
            <a href={`https://welovedevs.com/fr/salaires/`}>
                <FormattedMessage id="Footer.backlinks.salaries" defaultMessage="How much does a developer earns?" />
            </a>
        </div>
    );
};
const FooterComponent = () => {
    const classes = useStyles();
    const { screenSizes } = useTheme();

    const useSmallLayout = useMediaQuery(
        `(max-width: ${screenSizes.medium - (screenSizes.medium - screenSizes.small) / 2}px)`,
        { defaultMatches: true }
    );

    if (useSmallLayout) {
        return (
            <div className={cn(classes.container, useSmallLayout && classes.smallLayoutContainer)}>
                <div className={classes.logosContainer}>
                    <div className={classes.wldLogoGithubLogoContainer}>
                        <a
                            className={classes.logoLink}
                            href="https://welovedevs.com"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Logo className={classes.logo} />
                        </a>
                        <Tooltip
                            title={<FormattedMessage id="Footer.github.tooltip" defaultMessage="Fork me on GitHub !" />}
                        >
                            <a
                                className={classes.githubLink}
                                href="https://github.com/welovedevs/developer-profile"
                                target="_bank"
                                rel="noreferer noopener"
                            >
                                <GithubLogo className={classes.githubLogo} />
                            </a>
                        </Tooltip>
                    </div>
                    <ShareLinks useSmallLayout />
                </div>
                <Backlinks />
            </div>
        );
    }

    return (
        <div className={classes.container}>
            <div className={classes.logosContainer}>
                <a className={classes.logoLink} href="https://welovedevs.com" target="_blank" rel="noreferrer noopener">
                    <Logo className={classes.logo} />
                </a>
                <div className={classes.linksContainer}>
                    <ShareLinks />
                    <Backlinks />
                </div>
                <Tooltip title={<FormattedMessage id="Footer.github.tooltip" defaultMessage="Fork me on GitHub !" />}>
                    <a
                        className={classes.githubLink}
                        href="https://github.com/welovedevs/developer-profile"
                        target="_bank"
                        rel="noreferer noopener"
                    >
                        <GithubLogo className={classes.githubLogo} />
                    </a>
                </Tooltip>
            </div>
        </div>
    );
};

export const Footer = memo(FooterComponent);
