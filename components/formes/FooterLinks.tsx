import Link from 'next/link'
import React from 'react'

const FooterLinks = ({text, href, linkText} : FooterLinkProps) => {
  return (
    <div className='text-center pt-4'>
      <p className='text-sm text-muted-foreground'>
        {text}{` `}
        <Link href={href} className='footer-link'>{linkText}</Link>
      </p>
    </div>
  )
}

export default FooterLinks