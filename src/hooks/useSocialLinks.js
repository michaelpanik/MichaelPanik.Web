import React from 'react'
import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useSocialLinks = () => {
    return [
        { label: 'Twitter', url: 'https://twitter.com/michaelpanik', icon: <FontAwesomeIcon icon={faTwitter} /> },
        { label: 'Instagram', url: 'https://instagram.com/frontend.io', icon: <FontAwesomeIcon icon={faInstagram} /> },
        { label: 'LinkedIn', url: 'https://linkedin.com/in/michaelpanik', icon: <FontAwesomeIcon icon={faLinkedin} /> },
        { label: 'GitHub', url: 'https://github.com/michaelpanik', icon: <FontAwesomeIcon icon={faGithub} /> },
    ]
}

export default useSocialLinks