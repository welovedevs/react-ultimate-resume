import React from 'react';

import { ProjectDialog } from '../project_dialog/project_dialog';

import { useCallbackOpen } from '../../../../hooks/use_callback_open';

const SeeProjectDetailComponent = () => {
    const [openDialog, setDialogOpened, setDialogClosed] = useCallbackOpen();
    return (
        <>
            <ProjectDialog
                open={openDialog}
                onClose={setDialogClosed}
            />
            <button type="button" onClick={setDialogOpened}>
                See more
            </button>
        </>
    );
};

export const SeeProjectDetail = SeeProjectDetailComponent;
