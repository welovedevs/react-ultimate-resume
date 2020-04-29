---
id: integrate-top-bar
title: Top bar buttons
---

#Integrate top bar buttons

As you can see on [the reference site](https://vincent-cotro.welovedevs.com), we've integrated two buttons in the header.
This can be done via the `additionalNodes.banner.actionButton` props

```javascript
    <DeveloperProfile
        mode={'readOnly'}
        data={resume}
        additionalNodes={{
            banner: {
                actionsButtons: (
                    <>
                        <ButtonComponent/>
                    </>
                )
            }
        }}
    />
``` 

Your Button component can trigger anything. You could for instance open a dialog with a form  : 

```javascript

export const ButtonComponent = ({ props }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <SendMessageDialog open={open} onClose={() => setOpen(false)} />
            <Button color={'light'} variant={'outlined'} onClick={() => setOpen(true)}>
                <FormattedMessage id="Banner.sendMessageButton" defaultMessage="Contact me" />
            </Button>
        </>
    );
};

```

Please note we've chosen to integrate the dialog inside the button component but we could also have integrated it beside the DeveloperProfile component.
 