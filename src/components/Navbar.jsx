import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import image from '../file-pen-line.svg'
export default function Navbar() {
    const {themeMode, toggleMode, dark} = useContext(ThemeContext)
    
    const handleToggle = ()=>{
        toggleMode()
    }
    
  return (
    <div className='container-fluid' style={themeMode}>
      <nav className="navbar border-bottom" >
        <div className="container-fluid">
          <a className="navbar-brand" href='/' style={themeMode}><img src={image} alt='img'/>Text Analyzer</a>
          <div className="form-check form-switch d-flex align-items-center">
            <input className="form-check-input switch" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleToggle}/>
            <label className="form-check-label ps-2" htmlFor="flexSwitchCheckDefault">{dark}</label>
          </div>
        </div>
      </nav>
    </div>
  )
}
