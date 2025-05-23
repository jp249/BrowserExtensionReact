import Card from "./Card"

function App() {
  return(<>
  <div className="searchBar">
    <input type="text" placeholder="Extensions" className="searchBar2">
    </input>
  </div>
  <div className="header2">
  <span className="extensionsList">Extensions List {/*should become own component later*/}</span>
  <span className="active"> <button className="buttons">All</button> <button className="buttons">Active</button> <button className="buttons">Inactive</button> {/*should become own component later*/}</span>
  {/*<br></br>*/}
  </div>
  <div className="cardDiv">
  <Card paragraph = "Quickly inspect page layouts and visualize element boundaries." image= '/logo-devlens.svg' header = "Devlens">
    
  </Card>


  <Card paragraph = "Instantly analyze and copy CSS from any webpage element." image= '/logo-style-spy.svg' header = "Style Spy">


  </Card>
  

  <Card paragraph = "Optimizes browser resource usage to accelerate page loading." image= '/logo-speed-boost.svg' header = "Speedboost">

</Card>


<Card paragraph = "Formats, validates, and prettifies JSON responses in-browser." image= '/logo-json-wizard.svg' header = "JSONWizard">

</Card>  


<Card paragraph = "Organizes browser tabs into groups and sessions." image= '/logo-tab-master-pro.svg' header = "TabMaster Pro">

</Card>


<Card paragraph = "Simulates various screen resolutions directly within the browser." image= '/logo-viewport-buddy.svg' header = "Viewport Buddy">

</Card>

<Card paragraph = "Enables annotation and notes directly onto webpages for collaborative debugging." image= '/logo-markup-notes.svg' header = "Markup Notes">

</Card>


<Card paragraph = "Overlay customizable grids and alignment guides on any webpage." image= '/logo-grid-guides.svg' header = "GridGuides">


</Card>


<Card paragraph = "Instantly extracts color palettes from any webpage." image= '/logo-palette-picker.svg' header = "Palette Picker">

</Card>


<Card paragraph = "Scans and highlights broken links on any page." image= '/logo-link-checker.svg' header = "LinkChecker">

</Card>  


<Card paragraph = "Capture and export DOM structures quickly." image= '/logo-dom-snapshot.svg' header = "DOM Snapshot">

</Card>


<Card paragraph = "Enhanced developer console with advanced filtering and logging." image= '/logo-console-plus.svg' header = "ConsolePlus">

</Card>
</div>
</>)
}

export default App
