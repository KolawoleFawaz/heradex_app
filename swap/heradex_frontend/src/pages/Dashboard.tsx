import Dashboard from "../components/dashboard"
import Sidebar from "../components/sidebar"

const DashboardPage = () =>{
    return(
        <div className="main">
            <Sidebar className="sidebar"/>
            <Dashboard className="dashboard"/>
        </div>
    )
}

export default DashboardPage