import './Footer.css'
import Socials from '../Socials/Socials'
import List from '../List/List'
import Copyright from '../Copyright/Copyright'

function Footer () {
    return (
        <div className="Footer">
            <div className="Footer-container">
                <div>
                    <img src="https://hivalearn.ir/templates/kasuka/assets/img/logo.png" alt="" />
                    <p className="Address">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،  در ارائه راهکارها، و شر</p>
                    <h5 className="Phone-number">012345678910</h5>
                    <h5 className="Email">mohamadmt1579@gmail.com</h5>
                    <Socials></Socials>
                </div>
                <div>
                    <List></List>
                </div>
                <div>
                    <List></List>
                </div>
                <div className='News'>
                    <h4 className="News-title">خبرنامه</h4>
                    <p className='News-description'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده ازاد کرد، در این صورت می توان امید داشت که تم</p>
                    <form action="#" className='News-form'>
                        <input type="text" className='News-text' />
                        <input type="submit" className='Submit-news' value="ثبت نام" />
                    </form>
                </div>
            </div>
            <Copyright></Copyright>
        </div>
    )
}

export default Footer