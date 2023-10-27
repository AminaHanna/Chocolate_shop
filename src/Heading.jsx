import { Link } from "react-router-dom"; 
function Heading(){
    return(
        <>
        <div className="heading">
            <h1 style={{paddingTop:"200px"}}>We are Delicious<br></br>
            Ideal for every Chocoholic</h1>
            <div className="">
                <Link to="/search"><button className="btnn">Check Now</button></Link>
            </div>
        </div>
        </>
    )
}
export default Heading