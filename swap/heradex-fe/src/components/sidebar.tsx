import stylesheet from "./sidebar.module.css"
import logo from "../images/logo-hederex.svg"
import logoName from "../images/Heradex.svg"
import dashboardIcon from "../images/akar-icons_dashboard.svg"
import assetIcon from "../images/majesticons_coins-line.svg"
import poolIcon from "../images/hugeicons_money-bag-02.svg"
import swapIcon from "../images/Vector.svg"
import stake from "../images/hugeicons_stake.svg"

type SidebarProps = {
   className?: string
}
const Sidebar = (props: SidebarProps) =>{
    return (
        <div className={props.className}>
            <div className={stylesheet.logo}>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className={stylesheet.logoname}>
                    <img src={logoName} alt="logo" />
                </div>
                
            </div>
            <div className={stylesheet.nav}>
                <ul>
                    <li>
                        <img src={dashboardIcon} alt="dashboard-icon" />
                        <a href="swap">Dashboard</a>
                    </li>
                    <li>
                        <img src={swapIcon} alt="dashboard-icon" />
                        <a href="swap">Swap</a>
                    </li>
                    <li>
                        <img src={assetIcon} alt="dashboard-icon" />
            
                        <a href="swap">Assets</a>
                    </li>
                    <li>
                        <img src={stake} alt="dashboard-icon" />
                        <a href="swap">Staking</a>
                    </li>
                    <li>
                        <img src={poolIcon} alt="dashboard-icon" />
                        <a href="swap">Pool</a>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Sidebar