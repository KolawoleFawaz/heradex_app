import Sidebar from "../components/sidebar"
import Assets  from "../components/assets"

const AssetPage = () => {
    return (
        <div className="main">
            <Sidebar className="sidebar"/>
            <Assets className="asset"/>
        </div>
    )
}

export default AssetPage