import type { PropsWithChildren } from 'react'
import NavBar from './NavBar'
import Footerr from './Footerr'

const Layout = ({children} : PropsWithChildren) => {
  return (
    <div>
        <NavBar/>
     <main className='min-h-screen'>
        {children}
     </main>
      <Footerr/>
    </div>
  )
}

export default Layout