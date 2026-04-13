import type { ReactNode } from "react"
interface Head{
  children:ReactNode
}
const Header = ({children}:Head) => {
  return (
    <header>
        {children}
    </header>
  )
}

export default Header

