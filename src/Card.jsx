function Card (props) {
  return(<>
    <div className="Card">
      <img className="cardimage"  alt="extension icon" src={props.image}></img>
      <h2 className="header">{props.header}</h2>
      <p className='body'>{props.paragraph}</p>
      <label class="switch">
      <input type="checkbox"/>
      <span class="slider round"></span>
      </label>
      <div>
      <button class="removeButton">REMOVE</button>
      </div>
    </div>
    </>
    
  )
}
export default Card

//{description2.body3}