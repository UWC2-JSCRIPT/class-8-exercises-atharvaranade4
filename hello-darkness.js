document.addEventListener("DOMContentLoaded", function(){

    const body = document.body
    let bodyColor = 255
    console.log(body)

    let countdownInterval = setInterval(function(){
        if (bodyColor >=0) {
            body.style.background = `rgb(${bodyColor}, ${bodyColor}, ${bodyColor})`
            bodyColor--
            console.log(bodyColor)
        }
        else{
            clearInterval(countdownInterval)
        }
        }, 500
    )
})