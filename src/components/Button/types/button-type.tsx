export const GdsButtonTypeEnum = {
    primary: 'primary',
    clear: 'clear',
    secondary: 'secondary',
    textonly: 'textonly',
} as const;

export type ButtonType = typeof GdsButtonTypeEnum[keyof typeof GdsButtonTypeEnum];
