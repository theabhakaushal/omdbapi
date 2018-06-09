 

function display()  {
            
            document.getElementById("form").submit();
            
        }



$(document).ready(() => {


    $('#submit').click(()=>{

 getAllData(); 

    })// end get data 

  


}); // end of document.ready()

let getAllData = () => {
    
    var inputImdb=document.getElementById("inputval").value;
    var inputYear=document.getElementById("inputval").value;
    var inputTitle=document.getElementById("inputval").value;

    console.log("making request")

    $.ajax({
        type: 'GET', // request type GET, POST, PUT
        dataType: 'json', // requesting datatype
        url: 'https://www.omdbapi.com/?i=tt3896198&apikey=9f8ee903', // URL of getting data
        success: (data) => { // in case of success response
            
            console.log(data);

            
                    let NewRow = ` 
<div class="cardDiv container-fluid" style="border: 2px solid black;padding: 20px;height: auto;width: auto;margin-bottom: 30vh;background-color: #EEEEEE">

    <div class="row">
        
        <div class="col-lg-9 col-md-9 col-sm-11 col-xs-9" style="color:blue;"><font size="5"><strong>${(data.Title)} (${(data.Year)})</strong></font></div>
        <div class="col-lg-3 col-md-3 col-sm-11 col-xs-9"><strong>Rated:</strong><small> ${(data.Rated)}</small></div>
        <div class="col-lg-3 col-md-3 col-sm-11 col-xs-9" ><strong>Time:</strong><small> ${(data.Runtime)}</small></div>
        <div class="col-lg-6 col-md-6 col-sm-11 col-xs-9"><strong>Genre:</strong> <small>${(data.Genre)}</small></div>
        <div class="col-lg-3 col-md-3 col-sm-11 col-xs-9"><strong>Language:</strong> <small>${(data.Language)}</small></div>

    </div>
    <br>

    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

        <div class="row">
        
        <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12">
            <img src="" id="poster" width="17" height="20">
        </div>
    <br>

        <div class="col-lg-8 col-md-7 col-sm-12 col-xs-12" >
            
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><strong>Released On:   </strong><small>${(data.Released)}</small></div>
            
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><strong>Director:   </strong><small>${(data.Director)}</small></div>
            
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><strong>Production:   </strong><small>${(data.Production)}</small></div>
            
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><strong>Writer:   </strong><small> ${(data.Writer)}</small></div>
            
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><strong>Actors:   </strong> <small>${(data.Actors)}</small></div>
            
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><strong>Script:   </strong><small>${(data.Plot)}</small></div>
             
            <div class="row" style="padding-left:2vh;">

            <div class="col-lg-6 col-md-4 col-sm-12 col-xs-12"><strong>  Ratings: </strong><small>${(data.Ratings[0].Source)}--${(data.Ratings[0].Value)}</small></div>

            <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12"><small>${(data.Ratings[1].Source)}--${(data.Ratings[1].Value)}</small></div>

            <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12"><small>${(data.Ratings[2].Source)}--${(data.Ratings[2].Value)}</small></div>
            
             </div>

             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><strong>Download:    </strong><small>${(data.Website)}</small></div>
 
             <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><strong>Collection:    </strong><small>${(data.BoxOffice)}</small></div>


        
           
        </div>

        </div>

    </div>
   
</div>
`

if(data.imdbID==inputImdb||data.Title==inputTitle||data.Year==inputYear){


        $("#showData").append(NewRow);// placing data in division with id - 'showData'
        
                

                 $("#poster").attr({"src":data.Poster,width:250,height:300});
             


           }

           else{
            let errorMsg = `<div class="alert alert-info alert-dismissible" role="alert">
                        Wrong Input Given...Try Again..
                        </div>`
                    $("#showData").append(errorMsg);
           }      
         },
        
        error: (data) => { // in case of error response

            console.log(request);
                    console.log(errorType);
                   let errorMsg = `<div class="alert alert-info alert-dismissible" role="alert">
                        There is some problem with api.
                        </div>`
                    $("#showData").append(errorMsg);
        },

        beforeSend: () => { // while request is processing.

            // you can use loader here.
            alert("request is being made. please wait")

        },
        // complete: () => {

        //     // what you want to do while request is completed
        //     alert("data fetched success")

        // },

        timeout:3000 // this is in milli seconds

    }); // end of AJAX request

} // end of getAllData

