import React from "react"

function EyesOnMe(){
    function focus(){
        console.log("Good!")
    }
    function antiFocus(){
        console.log("Hey! Eyes on me!")
    }

return(
    <button onFocus={focus} onBlur={antiFocus}>Eyes on me</button>
)
}

export default EyesOnMe



