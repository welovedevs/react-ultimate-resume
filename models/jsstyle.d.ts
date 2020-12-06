export namespace Style {
    interface ProfileStyle {
        container: {
            [p: string]: any;
            minHeight: string;
            padding: number;
            margin: number;
            alignItems: string;
            flexDirection: string;
            display: string;
            width: string;
        };
        '@global': {
            button: {
                border: string;
                cursor: string;
                padding: number;
                outline: string;
                color: string;
                background: string;
                font: string;
            };
            a: {
                color: string;
                textDecoration: string;
            };
            'h1, h2, h3, h4, h5, h6': { margin: number };
            '*:focus': { outline: string };
            textarea: { resize: string };
            '*': {
                'box-sizing': string;
            };
        };
    }
}
