// Write all your Javascript here!
function initialize(){

    let bodyEl = document.querySelector(".card ");
         
    $.ajax({
        url:`https://techkaro-test.herokuapp.com/api/v1/getdata`,
     success: function(data){
        console.log(data);
      
               document.querySelector(".card").innerHTML = `<div class="card">
                    <div class="card-header">
                    <p class="date">${data.date}</p>
                    <p class="techkaro">by TechKaro community</p>
                    </div>
                    <div class="card-body">
                    <h5 class="card-title">${data.info.heading}</h5>
                    <p class="card-text">${data.info.description}</p>
                    </div>
                </div>`

        

     }
    
     });
    
}
