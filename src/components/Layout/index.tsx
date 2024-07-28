import SideNav from "../SideNav"

const Layout = ({ children} : {children:React.ReactNode}) => {
  return (
    <main className="flex flex-row w-full h-full" >
      <SideNav/>
      <div className="flex flex-col w-full">
      {children}
      </div>
      
    </main>
  )
}

export default Layout
