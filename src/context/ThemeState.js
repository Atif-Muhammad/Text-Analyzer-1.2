
import ThemeContext from "./ThemeContext";
import React, { useState} from 'react'


const ThemeState = (props) => {

    const toggleMode = () => {
        if (mode.backgroundColor === 'white') {
            setMode({
                backgroundColor: "#31363F",
                color: "white"
            })
            if (btnMode.backgroundColor === "black") {
                setBtnMode({
                    backgroundColor: "#222831",
                    color: "white",
                    border: "1px solid white"
                })
            } else {
                setBtnMode({
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid black"
                })
            }
            setSideTheme({
                backgroundColor: "#31363F",
                color: "white",
                border : "1px solid white"
            })
            light("Light Mode")
            showAlert("Switched to dark mode", "success")
        } else {
            setMode({
                backgroundColor: "white",
                color: "black"
            })
            if (btnMode.backgroundColor === "black") {
                setBtnMode({
                    backgroundColor: "#222831",
                    color: "white",
                    border: "1px solid white"
                })
            } else {
                setBtnMode({
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid black"
                })
            }
            setSideTheme({
                backgroundColor: "white",
                color: "black",
                border : "1px solid black"
            })
            light("Dark Mode")
            showAlert("Switched to light mode", "success")
        }
    }
    
    const [mode, setMode] = useState({
        backgroundColor: "white",
        color: "black"
    });
    const themeMode = mode ? {
        backgroundColor: mode.backgroundColor,
        color: mode.color
    } : {};
    const [dark, light] = useState("Dark Mode");
    const [btnMode, setBtnMode] = useState({
        backgroundColor: "black",
        color: "white",
        border: "1px solid black"
    })
    const btnThemeMode = btnMode ?{
        backgroundColor : btnMode.backgroundColor,
        color : btnMode.color,
        border : btnMode.border
    } :{};

    const [sideTheme, setSideTheme] = useState({
        backgroundColor : "white",
        color : "black",
        border : "1px solid black"
    })
    const sendSideTheme = sideTheme?{
        backgroundColor : sideTheme.backgroundColor,
        color : sideTheme.color,
        border : sideTheme.border
    }: {};

    const showAlert = (message, type) => {
        setAlertText({
            message: message,
            type: type
        })
        setTimeout(() => {
            setAlertText(null)
        }, 4000);

    }
    const [alertText, setAlertText] = useState(null)


    // Left logic
    const [inputText, setInputText] = useState("")
    
    function touppercase(){
        const userEntry = document.getElementById("userEntry")
        let text = userEntry.value
        if(!text){
            showAlert("Text area is empty", "warning")
        }else{
            setInputText(text.toUpperCase())
            showAlert("Converted to UpperCase", "success")
        }
    }
    function tolowercase(){
        const userEntry = document.getElementById("userEntry")
        let text = userEntry.value
        if(!text){
            showAlert("Text area is empty", "warning")
        }else{
            setInputText(text.toLowerCase())
            showAlert("Converted to Lowercase", "success")
        }
    }
    function capitalize() {
        let userEntry = document.getElementById("userEntry")
        let text = userEntry.value
        if (!text) {
            showAlert("Text Area is Empty", "warning")
        } else {
            showAlert("Capitalized", "success")
            function titleCase(str) {
                return str.toLowerCase().split(" ").map(function(word) {
                    return word.charAt(0).toUpperCase() + word.slice(1);              
                }).join(" ");          
            }
            setInputText(titleCase(text))
        }
    }
    function rmvExtraspaces(){
        let userEntry = document.getElementById("userEntry")
        let text = userEntry.value
        if (!text) {
            showAlert("Text Area is Empty", "warning")
        } else { 
            setInputText(text.toString().split(""))
            showAlert("Extra spaces removed", "success")
        }
    }
    function reset() {
        setInputText("")
        let userEntry = document.getElementById("userEntry")
        userEntry.value = ""
        showAlert("Reset", "success")
    }
    function copyText(){
        let result = document.getElementById("resultdiv")
        if(result.innerHTML){
            navigator.clipboard.writeText(result.innerHTML)
            showAlert("Copied to clipboard", "success")
        }else{
            showAlert("cannot copy to clipboard", "danger")
        }
    }
    async function pasteText() {
        try {
            const clipboardText = await navigator.clipboard.readText();
            let userEntry = document.getElementById("userEntry")
            userEntry.value = clipboardText
            console.log("Pasted text:", clipboardText);
        } catch (err) {
            showAlert("cannot paste", "danger")
        }
    }

    const contextValues = { themeMode, dark, toggleMode, alertText, btnThemeMode, sendSideTheme, inputText, touppercase, tolowercase, capitalize, rmvExtraspaces, reset, copyText, pasteText }
    return (
        <ThemeContext.Provider value={contextValues}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeState;

