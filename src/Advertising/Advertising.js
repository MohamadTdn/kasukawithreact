import './Advertising.css'

function Advertising (props) {
    return (
        <div className="Add">
            <h2 className="Add-title">{props.title}</h2>
            <p className="Add-subtitle">{props.desc}</p>
        </div>
    )
}

export default Advertising