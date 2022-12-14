document.addEventListener("DOMContentLoaded", function(){

  let myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      let randomNumber = Math.random().toFixed(1)
      console.log(`random number: ${randomNumber}`)
      if (randomNumber > 0.5){
        resolve()
      }
      else{
        reject()
      };
    }, 1000);
  });

  myPromise
    .then(function() {
      console.log('success');
    })
    .catch(function() {
      console.log('fail');
    })
    .finally(function() {
      console.log('complete');
    })

})
