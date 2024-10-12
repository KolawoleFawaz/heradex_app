import stylesheet from "./assets.module.css"
import icp from "../images/icp.svg" 
import ethereum from "../images/free_ethereum_logo.png.svg"
import bitcoin from "../images/bitcoin-logo.svg"
import visibilityOff from "../images/visibility_off.svg"
import arrowUp from "../images/call_made.svg"
import arrowdown from "../images/call_received.svg"
import copy from "../images/content_copy.svg"
type swapProps = {
    className: string
}
const Assets = (props: swapProps) =>{
    return(
        
        <div className={props.className}>
            <header className={stylesheet.header}>
                <input type="text" name="" id="" placeholder="Search for token"/>             
                <div className={stylesheet.wallet}>
                    <button type="button">icp</button>
                    <p>
                        a89543...c68b
                        <img src={copy} alt="" />
                    </p>                    
                </div>             

            </header>
            <main className={stylesheet.main}>
                <section className={stylesheet.section1}>
                    <div className={stylesheet.left}>
                        <p>Total Balance
                            <span>
                                <img src={visibilityOff} alt="" />
                            </span>
                        </p>
                        <h3>$104,540.90</h3>
                    </div>
                    <div className={stylesheet.right}>
                        <p className={stylesheet.but}>
                            Send 
                            <span>
                                <img src={arrowUp} alt="" />
                            </span>
                        </p>
                        <p className={stylesheet.but}>
                            Receive
                            <span>
                                <img src={arrowdown} alt="" />
                            </span>
                        </p>
                    </div>
                </section>
                <section className={stylesheet.section2}>
                    <h3>Assets</h3>
                    <hr/>
                    <div className={stylesheet.heading}>
                        <p>Name</p>
                        <p>Price</p>
                        <p>Amount</p>
                        <p>Value</p>
                    </div>
                    <div className={stylesheet.data}>
                        <p className={stylesheet.p_image}>
                            <img src={icp} alt="" />
                            <span>
                                Internet Computer
                            </span>
                        </p>
                        <p>Price</p>
                        <p>Amount</p>
                        <p>Value</p>
                    </div>
                    <div className={stylesheet.data}>
                        <p className={stylesheet.p_image}>
                            <img src={bitcoin} alt="" />
                            <span>
                                Bitcoin
                            </span>
                        </p>
                        <p>Price</p>
                        <p>Amount</p>
                        <p>Value</p>
                    </div>
                    <div className={stylesheet.data}>
                        <p className={stylesheet.p_image} >
                            <img src={ethereum} alt="" />
                            <span>
                                Ethereum
                            </span>
                        </p>
                        <p>Price</p>
                        <p>Amount</p>
                        <p>Value</p>
                    </div>
                </section>
                <section className={stylesheet.section3}>
                    <h3>Recent Transactions</h3>
                    <div>
                        <p className={stylesheet.date}>20.10.24</p>
                    </div>
                    <div className={stylesheet.trans}>
                        <p className={stylesheet.p_image}>
                            <img src={icp} alt="" />
                            <span>
                                Internet computer
                            </span>
                            
                        </p>
                        <p className={stylesheet.amount}>
                            -1.2 ICP
                        </p>
                    </div>
                    <div>
                        <p className={stylesheet.date}>20.10.24</p>
                    </div>
                    <div className={stylesheet.trans}>                        
                        <p className={stylesheet.p_image}>
                            <img src={ethereum} alt="" />
                            <span>
                                Ethereum
                            </span>

                        </p>
                        <p className={stylesheet.amount}>
                            -1.2 ETH
                        </p>
                    </div>                    
                </section>
            </main>
        </div>
    )
}


export default Assets