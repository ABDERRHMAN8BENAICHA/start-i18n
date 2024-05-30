import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {}

export default function Page({ }: Props) {
    const t = useTranslations('Index');
    return (
        <div>
            {
                t("content")
            }
        </div>
    )
}