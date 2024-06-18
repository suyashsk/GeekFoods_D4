import Logo from '../assets/download.png'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
const Header = () =>{
    return (
    <>
    <div className="main_container">
       
        <div className="left_wala">
            <img className="images" src={Logo}  alt="Logo"/>
            <h2 className="header_text"><a href="/" className="anchors">GeekFoods</a></h2>
        </div>
        <div className="middle_wala">
            <Link to="/" className="anchors insideer activecl">Home</Link>
            <Link to="/quote" className="anchors insideer">Quote</Link>
            <Link to="/resturant" className="anchors insideer">Resturants</Link>
            <Link to="/foods" className="anchors insideer">Foods</Link>
            <Link to="/contact" className="anchors insideer">Contact</Link>
        </div>
        <div className="right_wala">
            <Button variant="contained" style={{backgroundColor:"#1d4ed8" ,borderRadius:"10px", textTransform:"none"}}>Get Started</Button>
        </div>
    </div>
    
    </>)
}

export default Header;