import { useState } from "react";
import LanguageToggle from "../LanguageToggle";
import Link from "next/link";
import ModalFeedback from "../ModalFeedBack";

const LinksAction = () => {
  const [openModalFeedback, setOpenModalFeedback] = useState(false);

  return (
    <>
      <div className="flex items-center gap-4 sm:gap-6 order-1 sm:order-2">
        <LanguageToggle />
        {links.map(({ name, href, blank, action }, index) => (
          <Link
            key={index}
            href={action ? '#' : href}
            onClick={action ? () => setOpenModalFeedback(true) : undefined}
            target={blank ? '_blank' : ''}
            className="text-xs hover:underline underline-offset-4 transition-all"
          >
            {name}
          </Link>
        ))}
      </div>
      <ModalFeedback open={openModalFeedback} onClose={() => setOpenModalFeedback(false)} />
    </>
  );
}

export default LinksAction;

interface Link {
  name: string;
  href: string;
  blank: boolean;
  action?: boolean;
}

export const links: Link[] = [
  {
    name: 'Blog',
    href: '/blog',
    blank: false
  },
  {
    name: 'Github',
    href: 'https://github.com/Jonatank28',
    blank: true
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/jonatan-s-almeida-4b817b226/',
    blank: true
  },
  {
    name: 'Feedback',
    href: '#',
    blank: false,
    action: true
  },
];
