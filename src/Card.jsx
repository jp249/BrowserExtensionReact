function Card () {
  return(
    <div className="Card">
      <img className="cardimage" src={logoPicture} alt="profile picture"></img>
      <h2 className="header">Header</h2>
      <p className='body'>Description</p>
    </div>
  )
}

export default Card