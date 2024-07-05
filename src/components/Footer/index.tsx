import { usePathname } from '@/navigation';
import LinksAction from './LinksAction';
import Copy from './Copy';

const IndexFooter = () => {
  const pathname = usePathname()

  if (pathname === "/json-formatter") return null
  return (
    <div className="defaultWidth py-5 border-t">
      <footer className="flex flex-col md:flex-row gap-1 justify-between items-center">
        <Copy />
        <LinksAction />
      </footer>
    </div>
  )
}

export default IndexFooter
