import stylesheet from "./dashboard.module.css"
import stylesheet1 from "./swap.module.css"
import greenWallet from "../images/solar_wallet-linear-green.svg"
import change from "../images/exchange.svg"
import icpIcon from "../images/icp.svg"
import usdt from "../images/mining_tether_logo.png.svg"
import copy from "../images/content_copy.svg"
type swapProps = {
    className: string
}
const Swap = (props: swapProps) =>{
    return(
        
        <div className={props.className}>
            <header className={stylesheet1.header}>
                <div>
                    <p>a89543...c68b</p>
                    <img src={copy} alt="" />
                    
                </div>
            </header>
            <section className={stylesheet1.section}>
                <p className={stylesheet.p}>Swap</p>
                <aside>
                    <div className={stylesheet1.top}>
                        <div>
                            <p>You Pay</p>
                            <div className={stylesheet1.display}>
                                <img src={icpIcon} alt="" />
                                <p>ICP</p>
                            </div>
                            <div>
                                <button>Min</button>
                                <button>Half</button>
                                <button className={stylesheet1.greenbtn}>Max</button>
                            </div> 
                        </div>
                        <div className={stylesheet1.right}>
                            {/* <p></p> */}
                            <h3>
                                2.48
                            </h3>
                            <div>
                                <img src={greenWallet} alt="" />
                                <p>Bal: 4.56</p>
                            </div>

                        </div>
                    </div>
                    <div className={stylesheet1.middle}>
                            <img src={change} alt="" />
                    </div >
                    <div className={stylesheet1.bottom}>
                        <div>
                            <p>You Receive</p>
                            <div className={stylesheet1.display}>
                                <img src={usdt} alt="" />
                                <p>USDT</p>
                            </div>  
                            <div>
                                <button>Min</button>
                                <button>Half</button>
                                <button className={stylesheet1.greenbtn}>Max</button>
                            </div>   
                        </div>
                        <div className={stylesheet1.right}>
                            {/* <p></p> */}
                            <h3>
                                2.48
                            </h3>
                            <div>
                                <img src={greenWallet} alt="" />
                                <p>Bal: 4.56</p>
                            </div>

                        </div>
                    
                                     
                    </div>
                    <div className={stylesheet1.btn} >
                        <button type="button">Connect Wallet</button>
                    </div> 
                    
                </aside>
                <main>
                    <div>               
                        
                    </div>
                </main>
            </section>
            <section className={stylesheet1.section1}>
                <div>
                    <div className={stylesheet1.img}>
                        <img src={icpIcon} alt="" />
                    </div>
                    <div className={stylesheet1.text}>
                        <p className={stylesheet1.big}>ICP</p>
                        <p className={stylesheet1.small}>Internet Computer</p>
                    </div>
                    <p className={stylesheet1.amount}>
                        $8.71
                    </p>
                </div>
                <div>
                    <div className={stylesheet1.img}>
                        <img src={usdt} alt="" />
                    </div>
                    <div className={stylesheet1.text}>
                        <p className={stylesheet1.big}>ICP</p>
                        <p className={stylesheet1.small}>Internet Computer</p>
                    </div>
                    <p className={stylesheet1.amount}>
                        $8.71
                    </p>
                </div>
                

            </section>
        </div>
    )
}


export default Swap