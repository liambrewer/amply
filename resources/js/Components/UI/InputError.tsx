import type { PropsWithChildren } from 'react';

import { InformationCircleIcon } from '@heroicons/react/16/solid';

export default function InputError({ children }: PropsWithChildren) {
    return (
        <div className="mt-1 flex items-center gap-1 text-red-500">
            <InformationCircleIcon className="size-3.5 flex-shrink-0" />

            <p className="text-sm">{children}</p>
        </div>
    );
}
