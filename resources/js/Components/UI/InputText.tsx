import { type InputHTMLAttributes } from 'react';

import InputError from '@/Components/UI/InputError';
import InputLabel from '@/Components/UI/InputLabel';

import cn from '@/Utils/cn';

interface TextProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string | null;
    inputClasses?: string;
}

export default function InputText({
    label,
    error = null,
    inputClasses,
    type = 'text',
    ...inputProps
}: TextProps) {
    return (
        <div
            className={cn('flex flex-col text-gray-800', inputProps.className)}
        >
            <InputLabel required={!!inputProps.required}>{label}</InputLabel>
            <input
                className={cn(
                    'text-input',
                    error !== null && 'text-input-error',
                    inputClasses,
                )}
                type={type}
                placeholder={label}
                {...inputProps}
            />
            {error !== null ? <InputError>{error}</InputError> : null}
        </div>
    );
}
