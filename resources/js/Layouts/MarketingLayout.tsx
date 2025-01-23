import { type PropsWithChildren } from 'react';

import { Link } from '@inertiajs/react';

import Button from '@/Components/UI/Button';
import ButtonIcon from '@/Components/UI/ButtonIcon';

import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function MarketingLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <div className="flex min-h-screen flex-col">
                <header className="border-b bg-white">
                    <div className="flex h-16 items-center justify-between px-2.5">
                        <Link href={route('marketing.home')}>
                            <h1 className="text-lg font-semibold">Amply</h1>
                        </Link>

                        <div className="flex gap-1">
                            <Button href={route('login')}>Login</Button>
                            <Button
                                href={route('register')}
                                variant="primary"
                                right={
                                    <ButtonIcon>
                                        <ArrowRightIcon />
                                    </ButtonIcon>
                                }
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </header>

                <main className="grow p-2.5">{children}</main>
            </div>
        </div>
    );
}
