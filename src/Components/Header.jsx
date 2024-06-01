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
            <a href="/" className="anchors insideer activecl">Home</a>
            <a href="/" className="anchors insideer">Quote</a>
            <a href="/" className="anchors insideer">Resturants</a>
            <a href="/" className="anchors insideer">Foods</a>
            <a href="/" className="anchors insideer">Contact</a>
        </div>
        <div className="right_wala">
            <Button variant="contained" style={{backgroundColor:"#1d4ed8" ,borderRadius:"10px", textTransform:"none"}}>Get Started</Button>
        </div>
    </div>
    
    </>)
}

export default Header;