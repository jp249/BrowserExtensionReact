import consolelog from "./testfile"
import deleteButton from "./deleteButtonFile"

function Card (props) {
  return(<>
    <div className="Card" id={props.header} /*loopy={props.aK2}*/>
      <img className="cardimage"  alt="extension icon" src={props.image}></img>
      <h2 className="header">{props.header}</h2>
      <p className='body'>{props.paragraph}</p>
      <label className="switch">
      <input type="checkbox"/>
      <span className="slider round"></span>
      </label>
      <div>
      <button className="removeButton" onClick={() => {deleteButton(props.header)}}>REMOVE</button>
      </div>
    </div>
    </>
    
  )
}
export default Card

//{description2.body3}