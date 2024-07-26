import SideNav from "../SideNav"

const Layout = ({children} : {children:React.ReactNode}) => {
  return (
    <main className="flex flex-row">
      <SideNav/>
      {children}
    </main>
  )
}

export default Layout
