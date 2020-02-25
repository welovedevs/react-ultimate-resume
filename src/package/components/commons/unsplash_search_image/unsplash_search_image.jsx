import React, { useCallback, useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';
import cn from 'classnames';
import { TextField, Typography } from '@wld/ui';
import { styles } from './unsplash_search_image_styles';
import { useUnsplashResults } from '../../hooks/unsplash/use_unsplash_results';
import { DeveloperProfileContext } from '../../../utils/context/contexts';

const useStyles = createUseStyles(styles);
export const UnsplashSearchImage = ({ onChange, classes: additionalClasses = {} }) => {
    const classes = useStyles();
    const { apiKeys } = useContext(DeveloperProfileContext);

    const [searchInput, setSearchInput] = useState('');
    const { results } = useUnsplashResults(searchInput);
    const onSearchChanged = useCallback(e => {
        setSearchInput(`${e.target.value}`);
    }, []);

    const onImageSelected = useCallback(
        ({ description, urls, id, user, links }) => () => {
            onChange({
                id,
                url: urls.full,
                alt: description,
                credits: {
                    url: encodeURI(`${user.links.html}?utm_source=W3D Developer Profile&utm_medium=referral`),
                    name: user.username
                },
                fromUnsplash: true
            });
            // eslint-disable-next-line no-undef
            fetch(links.download_location, { headers: { Authorization: `Client-ID ${apiKeys.unsplash}` } });
        },
        [onChange]
    );
    return (
        <div className={cn(classes.container, additionalClasses.container)}>
            <Typography>
                <FormattedMessage id="Unsplash.dialog.title" defaultMessage="Search an image on unsplash" />
            </Typography>
            <TextField variant="flat" value={searchInput} onChange={onSearchChanged} fullWidth />
            <div className={classes.imagesContainer}>
                {results?.map(unsplashResult => (
                    <div className={classes.imageWrapper} onClick={onImageSelected(unsplashResult)}>
                        <img
                            className={classes.image}
                            src={unsplashResult.urls.small}
                            alt={unsplashResult.description}
                        />
                        <Typography variant="body3">
                            <FormattedMessage id="Unsplash.credit" defaultMessage="Photo by" />
                            <a href={unsplashResult.user.portfolio_url}>{unsplashResult.user.username}</a>
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};
