import { JSX } from 'react';

declare global {
    interface Window {
        grecaptcha: any;
    }
}
interface ChatProps {
    theme?: {
        bgColor?: string;
        primaryColor?: string;
    };
}
declare const CollBot: ({ theme }: ChatProps) => JSX.Element;

export { CollBot as default };
