import { Link } from "gatsby"
import React from "react"

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Title of the site. */
  siteTitle: string
}

/**
 * Renders a header element for the site.
 *
 * @author Mitchell Woods <github.com/mmwoods>
 * @param siteTitle Title of the site.
 */
export const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle || ``}
        </Link>
      </h1>
    </div>
  </header>
)