import Navbar from "./Navbar"



function Header () {

    return (
        <div className="box">
            <div className="box1">
                <img src="https://s.yimg.com/fz/api/res/1.2/bwLpWMzIshGmcI0m5FeHcw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/88485e2c-b94e-3589-b5cc-f911bca0be47/t_500x300" alt="logo" />
                <Navbar/>

            </div>
            <div className="box2">
               <img src="https://tse2.mm.bing.net/th?id=OIP.fuPXyVwEldOsfDz3NqjPUwHaHX&pid=Api&P=0&h=180" />
               <input type="text" placeholder="Search for products, brands & more" /> 
                 <div className="profile">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.bJpr9jpclIkXQT-hkkb1KQHaHa&pid=Api&P=0&h=180"/>
                    <p> Profile </p>
                 </div>
                 <div className="wishlist">
                    <img src="https://cdn-icons-png.flaticon.com/128/6051/6051092.png"/>
                    <p> Wishlist </p>
                 </div>
                 <div className="bag">
                    <img src="https://cdn-icons-png.flaticon.com/128/3139/3139155.png"/>
                    <p> Bag </p>
                 </div>

            </div>
        </div>

    )
}

export default Header