import type { PropsWithChildren } from 'react'
import NavBar from './NavBar'

const Layout = ({children} : PropsWithChildren) => {
  return (
    <div>
        <NavBar />
     <main className='min-h-screen'>
        {children}
     </main>
     <footer>
        <p>sunag</p>
     </footer>
    </div>
  )
}

export default Layout