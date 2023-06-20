export function footer(){
    return (
        <>
        
            <footer className=" container-fluid p-5" style={{backgroundColor:"#6639e4"}}>
                <div className="row">
                <div className="col-md-6 col-sm-12 d-flex">
                    <div className="  text-center mx-4">
                        <img src="https://uploads-ssl.webflow.com/6170a5fc21aede0d60d88b70/6170a5fd21aede13add88c04_icon-newsletter-crypto-template.svg" alt="" className="bg-light p-3" style={{borderRadius:"15px"}}/>
                    </div>
                    <div style={{color:"#fff"}} className="text-wrap fupdate">
                        <h4 style={{fontWeight:"800"}}>Get Lunar updates in your inbox</h4>
                        <h6>Enter your email to receive updates and stay in the loop.</h6>
                    </div>
                </div>
                <div className="col-md-5 col-sm-12 text-center mt-2">
                        <input type="text" className=" bg-light p-3" id="inputPassword2 " placeholder="Enter email address" style={{borderRadius:"10px"}}/>
                        <button type="submit" className="btn mb-2 p-0 ms-1" style={{backgroundColor:"#6639e4",color:"#fff",fontWeight:"400"}}>SUBSCRIBE</button>
                </div>
                </div>
                
            </footer>
            <div style={{backgroundColor:"black",color:"#fff"}} className="container-fluid">
                    <div className="copyright text-wrap container text-center">
                        ©Copyright of Lunar.io for portfolio and educational purposes only. Created by: <i><big>Stephen Rabor</big></i> 
                    </div>
            </div>
        </>
    )
}