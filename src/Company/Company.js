import './Company.css'

function Company (props) {
    return (
        <div className="Company">
            <img src={props.src} alt="" />
        </div>
    )
}

export default Company