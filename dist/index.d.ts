import * as react_jsx_runtime from 'react/jsx-runtime';

declare global {
    interface Window {
        grecaptcha: any;
    }
}
declare const CollBot: ({ reCaptchaClientId, theme }: {
    reCaptchaClientId?: string;
    theme: {
        icon: string;
        primaryColor: string;
        secondryColor: string;
    };
}) => react_jsx_runtime.JSX.Element;

export { CollBot as default };
