import './Team.css'

function Team (props) {
    return (
        <div className='Team'>
            <img src={props.src} className='Member-avatar' alt="" />
            <h3 className='Member-name'>{props.name}</h3>
            <h5 className='Member-job'>{props.job}</h5>
        </div>
    )
}

export default Team