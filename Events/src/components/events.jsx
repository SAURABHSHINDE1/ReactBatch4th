const Events = () => {

    const handleMainclick=(e)=>{    
        e.stopPropagation()
        console.log("main div clicked")

    }


    const handleInnerDiv = (e)=>{
        e.stopPropagation(e)
        console.log("inner div clicked")
    }



    const handleSubInner =(e)=>{
        e.stopPropagation()
        console.log("sub inner div clicked")
    }

  
    return ( <>

            <div className="main" onClick={handleMainclick}>

                    <div className="inner-div" onClick={handleInnerDiv}>

                        <div className="subinner" onClick={handleSubInner}>

                        </div>

                    </div>

            </div>


    </> );
}
 
export default Events;