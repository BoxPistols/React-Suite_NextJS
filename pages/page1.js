import React from 'react'
import Link from 'next/link'
import { Button, Nav } from 'rsuite'
import 'rsuite/styles/less/index.less'

const NavLink = React.forwardRef((props, ref) => {
  const { as, href, ...rest } = props
  return (
    <Nav>
      <Nav.Item componentClass={NavLink} href="/page1">
        Page 1
      </Nav.Item>
      <Nav.Item componentClass={NavLink} href="/page2">
        Page 2
      </Nav.Item>
    </Nav>
  )
})

export default function Page1() {
  return (
    <div className="hero">
      Page1
      <Link href="../">
        <a>home</a>
      </Link>
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
          padding: 50px;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
      `}</style>
    </div>
  )
}
