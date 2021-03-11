import { Link } from 'gatsby'
import React from 'react'
import useNavigation from '../../hooks/useNavigation'
import useSocialLinks from '../../hooks/useSocialLinks'
import Logo from '../Logo'


const Header = () => {
    const navItems = useNavigation()
    const socialLinks = useSocialLinks()

    return (
        <header>

            <main>

                <Link to="/">
                    <Logo class="logo" alt="Michael Panik's logo" />
                </Link>

                <nav class="site-navigation" id="siteNavigation">
                    <ul>
                        {navItems.map(item => (
                            <li>
                                <Link to={item.url}>
                                {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button class="menu-toggle" type="button" aria-controls="siteNavigation" aria-expanded="true" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>

            </main>


            <footer>

                <ul class="social">
                    {socialLinks.map(link => (
                        <li class="social__link">
                            <a href={link.url} target="_blank" rel="nofollow referrer">
                                <i class={`fab fa-${link.icon}`}></i>
                                <span class="sr-only">Follow Michael Panik on {link.label}.</span>
                            </a>
                        </li>
                    ))}
                </ul>

                <p class="copyright">&copy; { new Date().getFullYear() }, Michael Panik.</p>

            </footer>

        </header >
    )
}

export default Header