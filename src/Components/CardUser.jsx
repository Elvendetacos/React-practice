import Layout from "../Layout/Layout"
import '../assets/Style/carduser.css'
import img from "../assets/Img/DEADLINE.png";

function CardUser(){
    return(
        <>
            <Layout>
                <div className="Card-user">
                    <div className="imgUser">
                        <img src={img} alt="" />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default CardUser