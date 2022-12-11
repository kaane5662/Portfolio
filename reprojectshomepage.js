

    //define all items
    document.querySelectorAll(".thigrt").forEach(function(thing){


        thing.addEventListener('click', function(){
           

            console.log(thing.innerHTML)
            choose(thing.innerHTML)



        })
    })


    //find items
    function choose (location){


        document.querySelectorAll('.tool').forEach(function(thing){

            

                
                if((thing.innerHTML == location) || (location == "All")){
                    
                    thing.parentElement.parentElement.style.display = 'grid'
                   
                    

                }else{
                    thing.parentElement.parentElement.style.display = 'none'
                }

                



        })


        

        


    }



    


