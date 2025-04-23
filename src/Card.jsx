function Card (props) {
  return(
    <div className="Card">
      <img className="cardimage"  alt="extension icon"></img>
      <h2 className="header">Header</h2>
      <p className='body'>{props.body3}</p>
    </div>
  )
}

export default Card

//{description2.body3}