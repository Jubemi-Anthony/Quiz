import "./Topics.css";

const Topics = ({t,d,i}) => {
  return (
    <div className='Topics'>
        <div className="img-holder">
            <img src={i} alt="category topic image" />
        </div>
        <div className="texts">
            <p>{t}</p>
            <p>{d}</p>
        </div>
    </div>
  )
}

export default Topics