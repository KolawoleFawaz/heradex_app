import stylesheet from "./dashboard.module.css"
import house_icon from "../images/house_icon.svg"
import ProgressBar from "./progressBar"
import wallet from  "../images/solar_wallet-linear.svg"
import chart from "../images/lets-icons_chart.svg"
import wave from "../images/material-symbols_vitals-rounded.svg"
import number from "../images/number_icon.svg"
import key from "../images/key_icon.svg"
import coin from "../images/coin_icon.svg"
import greenWallet from "../images/solar_wallet-linear-green.svg"
type DashboardProps ={
    className?: string
}
const Dashboard = (props: DashboardProps) =>{
    return(
        <div className={props.className}>
            <header className={stylesheet.header}>
                <input type="text" name="" id="" placeholder="search for token"/>
                <div>
                    <img src={greenWallet} alt="" />
                    <p>Connect Wallet</p>
                </div>
            </header>
            <section className={stylesheet.section}>
                <p className={stylesheet.p}>Overview</p>
                <aside>
                    <div className={stylesheet.box}>
                        <div className={stylesheet.title}>
                            <p className={stylesheet.small}>
                                Total Value Locked
                            </p>
                            <img src={wallet} alt="" />
                        </div>
                        
                        <div className={stylesheet.card}>
                            <div>
                                <p className={stylesheet.big}>$1,234,666.90</p>
                                <p className={stylesheet.tiny}>8.79% from last month</p>
                            </div>
                            <img src={key} alt="" />                           
                        </div>
                        
                    </div>
                    <div className={stylesheet.box}>
                        <div className={stylesheet.title}>
                            <p className={stylesheet.small}>ICP Price </p>
                            <img src={chart} alt="" />
                        </div>
                        <div className={stylesheet.card}>
                            <div>
                                <p className={stylesheet.big}>$8.45</p>
                                <p className={stylesheet.tiny}>2.50% from last 24h </p>
                            </div>
                            <img src={coin} alt="" />                            
                        </div>

                        
                    </div >
                    <div className={stylesheet.box}>
                        <div className={stylesheet.title}>
                            <p className={stylesheet.small}>
                                Total Transactions 
                            </p>
                            <img src={wave} alt="" />
                        </div>
                        <div className={stylesheet.card}>
                            <div>
                                <p className={stylesheet.big}>1,234,666</p>
                                <p className={stylesheet.tiny}>8.79% from last week</p>
                            </div>
                            <img src={number} alt="" />
                            
                        </div>
                        
                    </div>
                </aside>
                <main>
                    <div>
                        <h3>Deposit</h3>
                        <select id="options" name="options">
                            <option value="option1">0</option>
                            {/* <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            <option value="option4">Option 4</option> */}
                        </select>
                        {/* <p>slider position</p> */}
                        <ProgressBar/>
                        <div className={stylesheet.btn} >
                            <button type="button">Deposit</button>
                        </div>                      
                        
                    </div>
                    <div className={stylesheet.img}>
                        <img src={house_icon} alt="house-icon" />
                    </div>
                </main>
            </section>
        </div>
    )
}


export default Dashboard