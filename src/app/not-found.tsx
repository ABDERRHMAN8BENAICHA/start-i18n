'use client';

import Error from 'next/error';

export default function NotFound({
    params: { locale }
}: {
    params: { locale: string };
}) {
    return (
        <html lang={locale}>
            <body>
                <Error statusCode={404} />
            </body>
        </html>
    );
}