import './Portfolio.css'

function Portfolio (props) {
    return (
        <div className='Portfolio'>
            <img src={props.src} alt="" />
        </div>
    )
}

export default Portfolio