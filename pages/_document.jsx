import { Html, Head, Main, NextScript } from 'next/document';

// Import global styles
import { GlobalComponent } from '@styles/GlobalComponents';

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <GlobalComponent />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
