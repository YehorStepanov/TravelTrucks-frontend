'use client';

import Link from 'next/link';
import css from './Header.module.css';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link className={css.logo_link} href="/">
          <svg className={css.logo} width="136" height="15">
            <use href="/img/sprite.svg#icon-TravelTrucks"></use>
          </svg>
        </Link>
        <ul className={css.nav_links}>
          <li className={css.nav_item}>
            <Link
              className={clsx(
                css.nav_item,
                pathname.startsWith('/') && css.active,
              )}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className={css.nav_item}>
            <Link className={clsx(
                css.nav_item,
                pathname.startsWith('/catalog') && css.active,
              )} href="/catalog">
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
