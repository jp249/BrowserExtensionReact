function Card (props) {
  return(
    <div className="Card">
      <img className="cardimage"  alt="extension icon" src={props.image}></img>
      <h2 className="header">{props.header}</h2>
      <p className='body'>{props.paragraph}</p>
    </div>
  )
}

export default Card

//{description2.body3}