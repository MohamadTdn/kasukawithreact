import './Info.css'

function Info (props) {
    return (
        <div className='Info'>
            <h2 className="Info-title">{props.title}</h2>
            <h5 className="Info-subtitle">{props.address}</h5>
        </div>
    )
}

export default Info