import SideNav from "../SideNav"

const Layout = ({children} : {children:React.ReactNode}) => {
  return (
    <main className="flex flex-row">
      <SideNav/>
      <div className="flex flex-col">
      {children}
      </div>
      
    </main>
  )
}

export default Layout
