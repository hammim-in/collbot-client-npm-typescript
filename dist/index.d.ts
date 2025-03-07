import React from 'react';

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
declare const CollBot: React.FC<ChatProps>;

export { CollBot as default };
