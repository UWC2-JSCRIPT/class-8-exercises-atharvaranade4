document.addEventListener("DOMContentLoaded", function(){

    let rgbVal = 0;
    let framePeriod

    const changeColor = () =>{

        if(rgbVal < 255){
            rgbVal++
            document.body.style.backgroundColor = `rgb(${rgbVal}, ${rgbVal}, ${rgbVal})`;
            requestAnimationFrame(changeColor)
        }
    }
    requestAnimationFrame(changeColor)
})