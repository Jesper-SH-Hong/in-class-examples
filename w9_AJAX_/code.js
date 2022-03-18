function f_1(data) {
    console.log(data)
    $('#temp').html(data.main.temp)
    // console.log(data.weather[0].description);
    // console.log(data.weather[0].icon);
    // // //dom 뒤집기 전에 이렇게 해서 함 보자 도나.
    $('#p2').html(data.weather[0].description);
    x= data.weather[0].icon; //string interpolatoin standby
    // $('#img1').attr("src", console.log(data.weather[0].icon));
    $('#img1').attr("src", 'http://openweathermap.org/img/wn/${x}@2x.png');


}

function get_w_f(){
    city_name = $('#city_name_').val()
    //ajax
    $.ajax( // input. object임 {}로 object를 나타냄.
        {
            // "url":`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=e0e57b76f8f73f98fcb7b5ddb8301846&unit=metric`,
            "url":`https://nameless-mesa-00708.herokuapp.com/q=Vancouver&appid=123456`,
            "type": "GET",    // 여러 도시면 위에 units
            "success": f_1    //jquery syntax success event가 트리거 되면.. 즉 저 url 그러면 이 procces_가 함ㅅ ㅜ핸들러인데 걍 f_1이라 할래
            //그리고 위에다 만들래 f_1
        })  
}
//url 접근하려는 서버. //이거 어서 얻어옴..? openweatherma.org 가서 api 가니 API call 있음
        //근데 2개의 작은 오렌지색 stringㅇ ㅣ있는데 variable로 바꿔치기 해야 해.. appid는 내 계정을 위해 유니크한 거임
        //그래서 여기 네 계정을 만들어야 해 ㅋㅋㅋ
        //로긴하면 my API key있음 튜토리얼의 나빌거 카피하지 마셈ㅋㅋㅋ




function setup (){
    $('#get_w').click(get_w_f);
}

$(document).ready(setup)