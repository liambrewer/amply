import type { LabelHTMLAttributes, PropsWithChildren } from 'react';

import cn from '@/Utils/cn';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    required: boolean;
}

export default function InputLabel({
    required = false,
    children,
    ...labelProps
}: PropsWithChildren<LabelProps>) {
    return (
        <label
            className={cn(
                'label',
                required && 'label-required',
                labelProps.className,
            )}
            {...labelProps}
        >
            {children}
        </label>
    );
}
