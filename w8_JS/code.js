


function s_() {
    $('img').attr("src", "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/newscms/2019_42/1495563/sadness-inside-out-today-main-tease-191018.jpg");
}

function h_() {
    $('img').attr("src", "https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
}

setup = function () {

    $('#hap').click(h_);
    $('#sad').click(s_);


    $("#p2").append("7777");   //바로 같은줄 두 ㅣ로 붙음
    // .prepend 하면 같은 줄 앞에 붙음(같은 p 태그 속)
    $("#p2").after("8888");
    //.after 하면 아랫줄. p2 태그 외부로
    //.before 하면 p2 앞인데 외부로 ㅇㅇㅇ
    // 이걸 왜 쓰냐.. 만약 html 엘렘 다 있는 리스트가 있어.. 근데 프리펜드, 어펜드, before, after..
    // 보통 안에 넣고 싶겠지만 떄론 밖에 뺴고 싶을 때도 있으니..ㅇㅇㅇ

    $("#p2").hide();
    // f12 인라인 스타일로 display: none 보임.. jQuery DOM이 자동으로 구현한 것..
    // $("#p2").show();

    // $("#p2").remove();
    
    //이건 hide와 비슷하지만 DOM에서 날림. view page source하면.. html 자체는 살아 있어.. 
    //jQuery는 네 html 파일은 못 건드리지만 DOM 오브젝트는 건드림. 
    //DOM 모델은 브라우저 안에서네 페에지를 나타나는 거임 그 밸류나 그런 걸 바꿔주는 거임   
}


$(document).ready(setup);