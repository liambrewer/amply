import type { PageProps } from '@/types';

import { Head } from '@inertiajs/react';

import Button from '@/Components/UI/Button';
import ButtonIcon from '@/Components/UI/ButtonIcon';
import MarketingLayout from '@/Layouts/MarketingLayout';

import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function Home({}: PageProps) {
    return (
        <>
            <Head title="Home" />
            <MarketingLayout>
                <div className="flex flex-col gap-2.5">
                    <h2 className="text-4xl font-medium tracking-tighter">
                        Share Your
                        <br />
                        <span className="text-blue-500">Progress.</span>
                        <br />
                        Amplify Your
                        <br />
                        <span className="text-blue-500">Fitness.</span>
                    </h2>

                    <p className="text-gray-800">
                        The most intuitive and reliable way to track and achieve
                        your fitness goals is right at your fingertips.
                    </p>

                    <Button
                        className="w-fit"
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
            </MarketingLayout>
        </>
    );
}
