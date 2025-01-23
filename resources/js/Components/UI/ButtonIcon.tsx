import { type PropsWithChildren } from 'react';

export default function ButtonIcon({ children }: PropsWithChildren) {
    return <div className="size-5 flex-shrink-0">{children}</div>;
}
