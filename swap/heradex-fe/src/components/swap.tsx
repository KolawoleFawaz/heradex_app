type swapProps = {
    className: string
}
const Swap = (props: swapProps) =>{
    return(
        <section className={props.className}>
            <div>
                <button type="button">Connect Wallet</button>
            </div>
            <main>
                <div>
                    <p>You Pay</p>
                </div>
                <div>
                    <p>You Receive</p>
                </div>
                <button type="button">Connect Wallet</button>
                
            </main>
        </section>
    )
}


export default Swap