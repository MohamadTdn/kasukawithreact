import './Navbar.css'

function Navbar () {
    return (
        <div className="Navbar">
            <div>
                <img src="https://hivalearn.ir/templates/kasuka/assets/img/logo.png" alt="" />
                <h1 className='Navbar-title'>Kasuka</h1>
            </div>
            <ul className="Navbar-menu"> 
                <li><a href="#">خانه</a></li>z
                <li><a href="#">درباره ما</a></li>
                <li><a href="#">خدمات</a></li>
                <li><a href="#">نمونه کارها</a></li>
                <li><a href="#">تیم</a></li>
                <li><a href="#">لیست کشویی</a></li>
                <li><a href="#">تماس با ما</a></li>
            </ul>
            <button className="Start-btn">شروع</button>
        </div>
    )
}

export default Navbar