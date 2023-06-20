export function SubHeading(a:string,b:string){
    return (
        <section style={{backgroundColor:"black"}} className="py-5">
        <div className="container-fluid text-center">
          <h1 style={{color:"#fff",fontWeight:"1000",opacity:".99"}}>
           
            {a}
          </h1>
          <h6 style={{color:"#fff",opacity:".85"}}>
        
          {b}
          </h6>
          
        </div>
    
      </section>
    )
}