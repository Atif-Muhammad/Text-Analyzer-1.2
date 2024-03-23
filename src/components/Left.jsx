import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import {Copy, RotateCcw, Space, BadgeMinus, ArrowBigUp, AArrowDown, AArrowUp, ClipboardCopy } from 'lucide-react'
export default function Left() {

  const {themeMode, btnThemeMode, inputText, touppercase, tolowercase, capitalize, rmvExtraspaces, reset, copyText, pasteText} = useContext(ThemeContext)
  return (
    <div className='container-fluid border-end d-flex flex-column align-items-center pt-5 ps-5 pe-5' style={themeMode}>
        <div className="input-group leftInput pt-5 mt-5">
            <span className="input-group-text" style={themeMode}>Enter text here </span>
            <textarea className="form-control border shadow-none" aria-label="With textarea" id='userEntry' style={themeMode}></textarea>
            <button type="button" className="btn btn-dark ps-4 pe-4 pt-2 pb-2 ms-3" id='paste' onClick={pasteText} style={btnThemeMode}><ClipboardCopy/></button>
        </div>
        <div className="container d-flex justify-content-center mt-4" >
            <button type="button" className="btn btn-dark ps-4 pe-4 pt-2 pb-2 ms-3" id='uppercase' onClick={touppercase} style={btnThemeMode}><AArrowUp /></button>
            <button type="button" className="btn btn-dark ps-4 pe-4 pt-2 pb-2 ms-3" id='lowercase' onClick={tolowercase} style={btnThemeMode}><AArrowDown/></button>
            <button type="button" className="btn btn-dark ps-4 pe-4 pt-2 pb-2 ms-3" id='capitalize' onClick={capitalize}  style={btnThemeMode}><ArrowBigUp /></button>
            <button type="button" className="btn btn-dark ps-4 pe-4 pt-2 pb-2 ms-3" id='extraspaces' onClick={rmvExtraspaces}  style={btnThemeMode}><BadgeMinus /><Space /><Space /></button>
            <button type="button" className="btn btn-dark ps-4 pe-4 pt-2 pb-2 ms-3" id='reset' onClick={reset} style={btnThemeMode}><RotateCcw /></button>
        </div>
        <h3 className='mt-5 text-center border-end border-start result'>Result</h3>
        <div className="container border p-4 border rounded" id='resultdiv'>{inputText}</div>
        <div className="container-fluid mt-1 d-flex justify-content-end">
            <button type="button" className="btn btn-dark pt-2 pb-2 ps-4 pe-4 mb-2 mt-1" id='copy' onClick={copyText} style={btnThemeMode}><Copy /></button>
        </div>

    </div>

  )
}
