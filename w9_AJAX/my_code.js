function get_weather_fn(){
    //ajax RQ whenever we click button
    alert("Yo")

}


function setup(){
    alert();
    $('#get_weather').click(get_weather_fn);
    
}
$(document).ready(setup);