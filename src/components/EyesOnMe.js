// Code EyesOnMe Component Here
function EyesOnMe(){

    function handleFocus(e){
        console.log("Good!")
    }
    function handleBlurEvent(e){
        console.log('Hey! Eyes on me!')
    }
    return(
        <button onFocus={handleFocus} onBlur={handleBlurEvent}>Eyes on me</button>
    )
}
export default EyesOnMe;