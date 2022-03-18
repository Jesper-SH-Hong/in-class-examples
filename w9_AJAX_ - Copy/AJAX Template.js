function f_1(data) {
    console.log(data)
}


function get_w_f() {
    $.ajax({
        "url": "https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=e0e57b76f8f73f98fcb7b5ddb8301846&unit=metric",
        "type": "GET", 
        "success": f_1 
    })
}



function setup()

$(document).ready(setup) {
    alert();
    $('#get_w').click(get_w_f);
}