'use client'

import Link from 'next/link'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import classes from './index.module.scss'
import Image from 'next/image'
import { HeaderNav } from '../Nav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'

// { header }: { header: Header } - Destructures the prop `header` and ensures it conforms to the `Header` type.
const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()

  return (
    // Dynamically sets the className for the <nav> element by combining a fixed class (classes.header)
    // with a conditional class (classes.hide) based on whether the current pathname is in the noHeaderFooterUrls array.
    // Filters out any falsy values and joins the resulting array into a space-separated string.
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image src="/logo-black.svg" alt="logo" width={170} height={50} />
        </Link>
        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}
export default HeaderComponent
