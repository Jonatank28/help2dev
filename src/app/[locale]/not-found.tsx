import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const metadata = {
  title: 'JSON Formatter',
  description: 'JSON Formatter',
}

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');
  return (
    <div className="h-full flex items-center justify-center">
      <Card className="shadow-xl rounded-lg">
        <CardContent className="text-center p-8">
          <h1 className="text-6xl font-bold mb-4 text-red-600">{t('title')}</h1>
          <p className="text-2xl mb-8 text-gray-700">{t('description')}</p>
          <Link href="/" prefetch={false} className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            {t('link')}
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
