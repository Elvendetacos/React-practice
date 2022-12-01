import '../assets/Style/header.css'
import img from '../assets/Img/DEADLINE.png'
import imgUser from '../assets/Img/DEADLINE.png'

function Header(){
    return(
        <>
            <div className='header'>
                <div className="header-logo">
                    <img src={img} alt="" />
                </div>
                <div className="header-user">
                    <img src={imgUser} alt="" />
                </div>
            </div>
        </>
    )
}

export default Header