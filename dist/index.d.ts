import * as react_jsx_runtime from 'react/jsx-runtime';

declare global {
    interface Window {
        grecaptcha: any;
    }
}
declare const CollBot: ({ AICHART_RECAPTCHA_FRONTED_KEY, YOUR_SITE_KEY }: {
    AICHART_RECAPTCHA_FRONTED_KEY?: string;
    YOUR_SITE_KEY?: string;
}) => react_jsx_runtime.JSX.Element;

export { CollBot as default };
