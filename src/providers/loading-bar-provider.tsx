'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const LoadingBarProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#FE53BB"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
}

export default LoadingBarProvider;