import type { AxiosError } from 'axios';
export interface AxiosErrorWithFormattedMessage extends AxiosError {
    response: AxiosError['response'] & {
        data?: {
            formattedMessage?: string;
        };
    };
}
