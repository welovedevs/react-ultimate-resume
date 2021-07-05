import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Classes, styles } from './technologies_picker_styles';
import { AllTechnologiesPicker } from './all_technologies_picker/all_technologies_picker';
import { SelectedTechnologies } from './selected_technologies/selected_technologies';
import { DevTechnology } from './technologies/technology';

const useStyles = makeStyles(styles);

interface Props {
    classes?: Classes;
    isMobile?: boolean;
    selectedValues: Array<DevTechnology>;
    onAddItem: (technoName: string) => void;
    onDeleteItem: (id: string) => void;
    onArrayChange: (newArray: Array<DevTechnology>) => void;
    onArrayItemChange: (item: DevTechnology) => void;
    technologies: DevTechnology[];
}

export const TechnologiesPicker: React.FC<Props> = ({
    isMobile,
    selectedValues,
    onAddItem,
    onDeleteItem,
    onArrayChange,
    onArrayItemChange,
    technologies,
    classes: receivedClasses = {}
}) => {
    const classes = useStyles({ classes: receivedClasses });

    return (
        <div className={classes.container}>
            <div className={classes.allTechnologies}>
                <AllTechnologiesPicker
                    technologies={technologies}
                    selectedItems={selectedValues}
                    onAdd={onAddItem}
                    onDelete={onDeleteItem}
                    classes={{
                        container: classes.allTechnologies,
                        technologiesList: classes.technologiesList
                    }}
                />
            </div>
            {!isMobile && <div className={classes.divider} />}
            {!isMobile && (
                <div className={classes.column}>
                    <SelectedTechnologies
                        className={classes.selectedTechnologies}
                        items={selectedValues}
                        onDelete={onDeleteItem}
                        onChange={onArrayChange}
                        onItemChange={onArrayItemChange}
                    />
                </div>
            )}
        </div>
    );
};
