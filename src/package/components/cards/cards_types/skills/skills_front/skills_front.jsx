import React, { useMemo } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

import { styles } from './skills_front_styles';
import { useTechnologies } from '../../../../hooks/technologies/use_technologies';

const useStyles = createUseStyles(styles);

const SkillsFrontComponent = ({ data }) => {
    const classes = useStyles();
    const { technologies } = useTechnologies();

    const techno = useMemo(() => {
        const firstTechno = data?.skills?.[0];

        if (!technologies || !firstTechno) {
            return null;
        }
        return technologies[firstTechno?.name];
    }, [technologies, data]);
    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer customClasses={{ container: classes.container }}>
                    <img
                        src={
                            techno &&
                            `https://process.filestackapi.com/output=format:png/negative/modulate=brightness:1000/compress/${techno?.handle}`
                        }
                        className={classes.logo}
                    />
                    <ProfileCardFrontTypography classes={{ container: classes.typography }}>
                        <FormattedMessage
                            id="Skills.front.title"
                            defaultMessage="I mainly write {techno} stuff"
                            values={{ techno: techno?.name }}
                        />
                    </ProfileCardFrontTypography>
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            <ProfileCardActions>
                <ProfileCardButton>
                    <FormattedMessage id="Skills.front.action" defaultMessage="More skills" />
                </ProfileCardButton>
            </ProfileCardActions>
        </>
    );
};

export const SkillsFront = SkillsFrontComponent;
