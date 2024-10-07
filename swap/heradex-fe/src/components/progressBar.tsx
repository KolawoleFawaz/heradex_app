import stylesheet from "./progressBar.module.css"
const ProgressBar = () =>{
    // const HandleClick = (e: any) => {
    //     e.preventDefault()
    //     const progressBar: any  = document.getElementById('progress-bar');
    //     let width = 0;

    //     const interval = setInterval(() => {
    //         if (width >= 100) {
    //             clearInterval(interval);
    //         } else {
    //             width++;
    //             progressBar.style.width = width + '%';
    //         }
    //     }, 50); // Adjust the interval timing for speed

    // }
    return(
        <>
            <div className={stylesheet.progressContainer}>
                <div className={stylesheet.progressBar} id="progress-bar"></div>
            </div>
            {/* <button id="start-button" onClick={HandleClick}>Start Progress</button> */}
        </>   
    )
}

export default ProgressBar