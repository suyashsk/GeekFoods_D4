import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import WavesIcon from '@mui/icons-material/Waves';
const Footer = () =>{
    return(
       <>
       <footer className="footer_main">
                <h1 className="footer_text"><WavesIcon/> logoipsum</h1>
                <p className="footer_para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
                <ul className="unorderdlistone">
                    <li><a href="" className="tags">About</a></li>
                    <li><a href="" className="tags">Careers</a></li>
                    <li><a href="" className="tags">History</a></li>
                    <li><a href="" className="tags">Services</a></li>
                    <li><a href="" className="tags">Projects</a></li>
                    <li><a href="" className="tags">Blog</a></li>
                </ul>
                <div className="icons_div">
                    <a href="" className="allicons"><FacebookOutlinedIcon /></a>
                    <a href="" className="allicons"><InstagramIcon/></a> 
                    <a href="" className="allicons"><TwitterIcon/></a>    
                    <a href="" className="allicons"><GitHubIcon/></a>    
                    <a href="" className="allicons"><SportsBasketballIcon/></a>    
                </div>
            </footer>
       </>
    )

}
export default Footer;