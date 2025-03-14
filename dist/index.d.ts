import * as react_jsx_runtime from 'react/jsx-runtime';

declare global {
    interface Window {
        grecaptcha: any;
    }
}
declare const CollBot: ({ reCaptchaClientId, icon }: {
    reCaptchaClientId?: string;
    icon: string;
}) => react_jsx_runtime.JSX.Element;

export { CollBot as default };
