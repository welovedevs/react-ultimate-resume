import {
    TechnologiesPicker as TechnologiesPickerComponent,
    TechnologiesPickerProps
} from '@welovedevs/ui/technologies/technologies_picker';
import React, { useMemo } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useAdditionalNodes } from '../../hooks/use_additional_nodes';

const translations = defineMessages({
    checkboxLabel: {
        id: 'Skills.EditDialog.onlySelected',
        defaultMessage: 'Only selected'
    },
    deleteLabel: { id: 'Main.lang.delete', defaultMessage: 'Delete' }
});
export const TechnologiesPicker: React.FC<TechnologiesPickerProps> = (props) => {
    const { formatMessage } = useIntl();
    const [content] = useAdditionalNodes('technologyPicker.content');

    const technoArray = useMemo(() => Object.values(props.technologies ?? {}), [props.technologies]);
    return (
        <TechnologiesPickerComponent
            {...props}
            technologies={technoArray}
            translations={{
                checkboxLabel: formatMessage(translations.checkboxLabel),
                deleteLabel: formatMessage(translations.deleteLabel)
            }}
            content={content ?? null}
        />
    );
};
