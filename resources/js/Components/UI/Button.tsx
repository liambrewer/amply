import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import { Link, type InertiaLinkProps } from '@inertiajs/react';

import cn from '@/Utils/cn';

interface CommonProps {
    variant?: 'primary' | 'success' | 'danger';
    left?: ReactNode;
    right?: ReactNode;
    children?: ReactNode;
}

interface LinkProps extends CommonProps, InertiaLinkProps {
    href: string;
}

interface ButtonProps
    extends CommonProps,
        ButtonHTMLAttributes<HTMLButtonElement> {}

type LinkOrButtonProps = LinkProps | ButtonProps;

export default function Button(props: LinkOrButtonProps) {
    const { variant, left, right, children, ...rest } = props;

    const baseClasses = cn(
        'flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-800 font-medium select-none outline-none duration-150',
        'hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 active:bg-gray-200',
        {
            'bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700':
                variant === 'primary',
            'bg-green-500 text-white hover:bg-green-600 focus:bg-green-600 active:bg-green-700 focus:ring-green-500':
                variant === 'success',
            'bg-red-500 text-white hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:ring-red-500':
                variant === 'danger',
        },
    );

    if ('href' in rest) {
        const { href, className, ...linkProps } = rest;

        return (
            <Link
                className={cn(baseClasses, className)}
                href={href}
                {...linkProps}
            >
                {left}
                {children}
                {right}
            </Link>
        );
    } else {
        const { type = 'button', className, ...buttonProps } = rest;

        return (
            <button
                className={cn(
                    baseClasses,
                    'disabled:pointer-events-none disabled:opacity-50',
                    className,
                )}
                type={type}
                {...buttonProps}
            >
                {left}
                {children}
                {right}
            </button>
        );
    }
}
