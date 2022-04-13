function fn_1(data) {  //웹서버에서 데이터 받을거니까 걍 변수명 data라 지을래 ㅋㅋ
    // console.log(data) 이걸 다 끌고올 필욘 없겠지 ㅎㅎ
    $('#temp').html(data.object.main.temp);
    // console.log(data.weather[0].description); //DOM 바꾸기 전에 일단 이렇게 해서 데이터 잘 읽혀지나 점검해보자. 잘 되니 이제 DOM에 사용하자.
    // console.log(data.weather[0].icon);  //'02d'로 뜸 ㅋㅋ 사이트 코드 활용 페이지 참고해서 스트링 보간 `(백틱) 해서 해결.
    $('#p2').html(data.object.weather[0].description);
    x = data.object.weather[0].icon;
    // $("#img1").attr("src", `http://openweathermap.org/img/wn/10d@2x.png`);   // '' 아님 ``임... backquote/backtick. 스트링 보간용 template strings임.
    $("#img1").attr("src", `http://openweathermap.org/img/wn/${x}@2x.png`);   // ${}랑 ' '로 스트링 보간! 다른 방법은 +로 concat인데 지저분
    

}  


function get_weather_fn(){
    //ajax RQ whenever we click button
    //alert("Yo")
    y=$("#city_name").val();  // 오늘 수업 마지막! 저 q를 밴쿠버 말고 스트링보간. input이니까 .html말고 val() 하자. (안그럼 밴쿠버 날씨만 계속 띄워줌ㅋㅋ)
            
    $.ajax(   //fn call for ajax param: object JS에서 {} 같진 않지만 파이썬 딕셔너리랑 js 오브젝트랑 같다고 생각하셈 key:value 씀 여기도
        {
           
            // 브라우저는 "url", "type", "success" 3개의 키를 채우길 기대함. url:접근하려는 서버
            // url: server u want to reach. how the browser will construct RQ and send it over the internet
            // url 어디서 갖고오냐 사이트 API 섹션. 해당 서비스 API doc에 가면 주어져있음. 네 RQ를 위한 URL임. 그 사이트의 오렌지색 스트링들은 너의 값들로 바꿔줘야 함. URL variable이라 하자 ㅋㅋ
            // appid는 내 유니크한 거임 가입해서 생성해야 함. 로긴해서 내 api key
            "url":`https://hidden-earth-42524.herokuapp.com/?q=${y}&appid=123456`,
            // "url":`https://api.openweathermap.org/data/2.5/weather?q=${y}&appid=e0e57b76f8f73f98fcb7b5ddb8301846&units=metric`,  
            // 변수(도시명)이 하나 이상이라면 &로 잘 구분하고 unit=metric은 신경 끄삼
            // 변수가 3개임 q, appid, units 이상 첫 키-밸류.   
            "type": "GET",  //두번쨰 키-밸류. "GET", "POST", "DELETE", "UPDATE" 이건 HTML 프로토클의 주요 RQ type들임. 인터넷에 두 노드 사이의 HTTP request는 이 4타입중 하나야 ㅋㅋ
        
            "success": fn_1    //jquery syntax. success event will be triggered. whenever we recieve reply from that webserver(URL), we should run that fn handler
        }

    )  


}


function setup(){
    // alert();
    $('#get_weather').click(get_weather_fn);
    
}
$(document).ready(setup);