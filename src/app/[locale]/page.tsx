import LocaleSwitcher from '@/components/LocaleSwitcher';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
export default function Home(params: any) {
  const t = useTranslations('Index');
  
  return (
    <div>
      <h1>
        {t('title')}
      </h1>
      <Link href="login">login👋</Link>
        {
          (params.params.locale == "ar") ? "Arabic" : "English" 
        }
      <LocaleSwitcher />
    </div>
  );
}
