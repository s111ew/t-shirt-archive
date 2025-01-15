import ButtonStylised from "./ButtonStylised"

function Navbar() {
  return(
    <nav className="navbar">
      <div className="button-container">
        <ButtonStylised text="Submit" />
        <ButtonStylised text="Contact" />
      </div>
      <h1>T-Shirt Archive</h1>
      <div>
        <input type="text" placeholder="Search..."/>
        </div>
    </nav>
  )
}

export default Navbar