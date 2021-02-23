import React, { memo, useEffect, useMemo, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { useIntl } from 'react-intl';
import { motion } from 'framer-motion';
import { Tooltip } from '@welovedevs/ui';
import { SHARE_LINKS_DATA } from './share_links_data';

import { styles } from './share_links_styles';
import { translations } from './share_links_translations';

const useStyles = createUseStyles(styles);

const ShareLinksComponent = ({ useSmallLayout }) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();
    const [link, setLink] = useState();
    const [displayLines, setDisplayLines] = useState(false);

    useEffect(() => {
        setLink((typeof window === 'undefined' ? {} : window).location?.href);
    }, []);

    const translatedMessage = useMemo(() => formatMessage(translations.linkMessage, { link }), [link]);

    useEffect(() => {
        if (!('IntersectionObserver' in (typeof window !== 'undefined' ? window : {}))) {
            return;
        }
        // eslint-disable-next-line no-undef
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting === true) {
                    return setDisplayLines(true);
                } else {
                    return setDisplayLines(false);
                }
            },
            { threshold: [0] }
        );
        observer.observe(document.querySelector('#footer-share-links'));
    }, []);

    return (
        <div id="footer-share-links" className={cn(classes.container, useSmallLayout && classes.smallLayoutContainer)}>
            {!useSmallLayout && (
                <motion.div
                    className={classes.backgroundLine}
                    animate={{ scale: displayLines ? 1 : 0 }}
                    transition={{
                        delay: 0.3
                    }}
                />
            )}
            <div className={classes.icons}>
                {Object.entries(SHARE_LINKS_DATA).map(([entryId, { getLink, icon: Icon, tooltipTranslation }]) => {
                    let content = <Icon key={`share_link_icon_${entryId}`} className={classes.icon} />;
                    if (typeof getLink === 'function') {
                        content = (
                            <a
                                key={`share_link_link_${entryId}`}
                                className={classes.link}
                                href={getLink({
                                    link,
                                    translatedMessage
                                })}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                {content}
                            </a>
                        );
                    }
                    if (tooltipTranslation) {
                        content = (
                            <Tooltip key={`share_link_tooltip_${entryId}`} title={tooltipTranslation}>
                                <button className={classes.button} type="button">
                                    {content}
                                </button>
                            </Tooltip>
                        );
                    }
                    return content;
                })}
            </div>
        </div>
    );
};

export const ShareLinks = memo(ShareLinksComponent);
