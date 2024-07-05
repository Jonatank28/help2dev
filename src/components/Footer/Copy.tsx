import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

const Copy = () => {
  const t = useTranslations('Footer')
  return (
    <nav className="flex gap-4 sm:gap-6 order-2 sm:order-1">
      <p className="text-xs">
        © {new Date().getFullYear()}{' '}
        <Link href="/" className="font-bold text-sm" >Help2dev</Link>{' '}
        - {t('copy')}
      </p>
    </nav>
  )
}

export default Copy
