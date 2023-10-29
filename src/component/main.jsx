import { Layout } from "antd"
import MainPage from "./mainpage"
import { Link, Outlet } from "react-router-dom"
import { Header } from "antd/es/layout/layout"

const Main =()=>{
return(
    <div><Layout style={{ height: '100vh' }}>
   <Header style={{ background: '#ffffff', fontSize:"40px", fontFamily:"fantasy" }}><Link to='/'>Game Store</Link> </Header>  
<Outlet></Outlet>
</Layout></div>
)
}
export default Main
