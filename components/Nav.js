import React from 'react'
import Link from 'next/link';
import NavStyles from './styles/NavStyles';


const Nav = () => {
  return <NavStyles>
      <Link href="/about">
        <a>
          <i class="fas fa-question-circle" />
        </a>
      </Link>
      <Link href="/projects">
        <a>
          <i class="fas fa-project-diagram" />
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <i class="fas fa-envelope" />
        </a>
      </Link>
      <Link href="/articles">
        <a>
          <i class="fas fa-book-open" />
        </a>
      </Link>
    </NavStyles>;
}

export default Nav;

