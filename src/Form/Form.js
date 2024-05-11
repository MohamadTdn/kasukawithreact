import './Form.css'

function Form () {
    return (
        <div className="Form">
            <form action="#" className="Contact-form">
                <input type="text" className="Name" placeholder="نام" />
                <input type="email" className="Email" placeholder="ایمیل" />
                <br />
                <input type="text" className="title" placeholder="عنوان" />
                <br />
                <textarea className="Messege" placeholder="پیام"></textarea>
                <br />
                <input type="submit" className="Submit-btn" value="ارسال" />
            </form>
        </div>
    )
}

export default Form