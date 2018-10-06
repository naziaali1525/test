// Write all your Javascript here!
function initialize(){

    let bodyEl = document.querySelector("#container ");
         
    $.ajax({
        url:`https://techkaro-test.herokuapp.com/api/v1/getdata`,
     success: function(data){
        console.log(data);
      
        
     document.querySelector("#container").innerHTML = 
           `  <div id = "main-div">
                    <h2>A Flower Day...</h2>
                        <button type="button" class="btn btn-success"><em>what's new at TechKaro?</em></button>
                    <div class="card" style="width: 500px" "height: 400px" >
                    <img class="card-img-top" src="${data.imageURL}" alt="Card image cap">
                    <div class="card-body card-date">
                        <p class="date"><i class="fas fa-calendar-alt"></i>${data.date}</p>
                        <p class="community"><i class="fas fa-user-alt"></i>by </p>
                    </div>
                    </div>
                    
                    <div class="card" style="width: 500px;">
                            <div class="card-body ">
                                <h5 class="card-title ">${data.info.heading}</h5>
                            
                                <p class="card-text">${data.info.description}</p>
                                
                    </div>
         </div>
         </div>
       
       <div id = sale-div>
         <div class= "big-sale">
              <button type="button" class="btn btn-success"><em>New to TechKaro? <em>Learn More ></em></em></button>
            <div class="card" style="width: 18rem;">
               <div class="card-body">
                 <h5 class="card-title">${data.sale.heading}</h5>
                 <p class="card-text">${data.sale.description}</p>
               </div> 
           </div>
        </div>
        </div> `

        document.querySelector(".nav").innerHTML = data.menuOption[0];
               
               
     }
    
     });


    
}
function getUr(){
    $.ajax({
        url:` https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur`,
 success: function(data){
        console.log(data);
      
        
     document.querySelector("#container").innerHTML = 
           `  <div id = "main-div">
                    <h2>A Flower Day...</h2>
                        <button type="button" class="btn btn-success"><em>what's new at TechKaro?</em></button>
                    <div class="card" style="width: 500px" "height: 400px" >
                    <img class="card-img-top" src="${data.imageURL}" alt="Card image cap">
                    <div class="card-body card-date">
                        <p class="date"><i class="fas fa-calendar-alt"></i>${data.date}</p>
                        <p class="community"><i class="fas fa-user-alt"></i>by </p>
                    </div>
                    </div>
                    
                    <div class="card" style="width: 500px;">
                            <div class="card-body ">
                                <h5 class="card-title ">${data.info.heading}</h5>
                            
                                <p class="card-text">${data.info.description}</p>
                                
                    </div>
         </div>
         </div>
       
       <div id = sale-div>
         <div class= "big-sale">
              <button type="button" class="btn btn-success"><em>New to TechKaro? <em>Learn More ></em></em></button>
            <div class="card" style="width: 18rem;">
               <div class="card-body">
                 <h5 class="card-title">${data.sale.heading}</h5>
                 <p class="card-text">${data.sale.description}</p>
               </div> 
           </div>
        </div>
        </div> `
        document.querySelector(".nav1").innerHTML = data.menuOption[0];
               
               
     }
    



    });
}
function getZh(){
    $.ajax({
        url:`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh`,
        success: function(data){
            console.log(data);
          
            
         document.querySelector("#container").innerHTML = 
               `  <div id = "main-div">
                        <h2>A Flower Day...</h2>
                            <button type="button" class="btn btn-success"><em>what's new at TechKaro?</em></button>
                        <div class="card" style="width: 500px" "height: 400px" >
                        <img class="card-img-top" src="${data.imageURL}" alt="Card image cap">
                        <div class="card-body card-date">
                            <p class="date"><i class="fas fa-calendar-alt"></i>${data.date}</p>
                            <p class="community"><i class="fas fa-user-alt"></i>by </p>
                        </div>
                        </div>
                        
                        <div class="card" style="width: 500px;">
                                <div class="card-body ">
                                    <h5 class="card-title ">${data.info.heading}</h5>
                                
                                    <p class="card-text">${data.info.description}</p>
                                    
                        </div>
             </div>
             </div>
           
           <div id = sale-div>
             <div class= "big-sale">
                  <button type="button" class="btn btn-success"><em>New to TechKaro? <em>Learn More ></em></em></button>
                <div class="card" style="width: 18rem;">
                   <div class="card-body">
                     <h5 class="card-title">${data.sale.heading}</h5>
                     <p class="card-text">${data.sale.description}</p>
                   </div> 
               </div>
            </div>
            </div> `
    
                   
                   
         }
        
 
    
    });
}

function getEn(){
    $.ajax({
        url:`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=en`,

        success: function(data){
            console.log(data);
          
            
         document.querySelector("#container").innerHTML = 
               `  <div id = "main-div">
                        <h2>A Flower Day...</h2>
                            <button type="button" class="btn btn-success"><em>what's new at TechKaro?</em></button>
                        <div class="card" style="width: 500px" "height: 400px" >
                        <img class="card-img-top" src="${data.imageURL}" alt="Card image cap">
                        <div class="card-body card-date">
                            <p class="date"><i class="fas fa-calendar-alt"></i>${data.date}</p>
                            <p class="community"><i class="fas fa-user-alt"></i>by </p>
                        </div>
                        </div>
                        
                        <div class="card" style="width: 500px;">
                                <div class="card-body ">
                                    <h5 class="card-title ">${data.info.heading}</h5>
                                
                                    <p class="card-text">${data.info.description}</p>
                                    
                        </div>
             </div>
             </div>
           
           <div id = sale-div>
             <div class= "big-sale">
                  <button type="button" class="btn btn-success"><em>New to TechKaro? <em>Learn More ></em></em></button>
                <div class="card" style="width: 18rem;">
                   <div class="card-body">
                     <h5 class="card-title">${data.sale.heading}</h5>
                     <p class="card-text">${data.sale.description}</p>
                   </div> 
               </div>
            </div>
         </div> `
         document.querySelector(".nav1").innerHTML = data.menuOption[0]; 
        }
    });
}








