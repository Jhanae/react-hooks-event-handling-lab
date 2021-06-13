// Code Keypad Component Here
function Keypad(){

    function handleChange(e){
        console.log('Entering password...')
    }
    return(
        <input onChange={handleChange} type="password"></input>
    )
}
export default Keypad;