import React from 'react'
import Header from '../Header'

import '../../styles/main.min.scss'

const Layout = ({children}) => {
    return (
        <div className="body">
        <Header />
        <main>
            {children}
        </main>
        </div>
    )
}

export default Layout