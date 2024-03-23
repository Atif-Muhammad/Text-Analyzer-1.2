import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

export default function Right() {

  const {sendSideTheme, themeMode, inputText} = useContext(ThemeContext)

  return (
    <div className='container pt-5 states' style={themeMode}>
      <h2 className='pt-5 mt-5'>States</h2>
      <table className="table">
        <thead></thead>
        <tbody >
          <tr >
            <th scope="row" style={sendSideTheme}>Words</th>
            <td style={sendSideTheme}>{inputText.length===0? 0: inputText.toString().split("").length}</td>
          </tr>
          <tr>
            <th scope="row" style={sendSideTheme}>Characters</th>
            <td colSpan="2" style={sendSideTheme}>{inputText.length}</td>
          </tr>
          <tr>
            <th scope="row" style={sendSideTheme}>Avg time to read the passage</th>
            <td colSpan="2" style={sendSideTheme}>{inputText.length / 125}s</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
