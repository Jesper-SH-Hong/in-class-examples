

function say_hello() {
    alert('Hello world!')
}


function add_f() {
    //read span 1
    x = jQuery('#op1').html() //셀렉터 통해서 취한거임ㅋㅋ jQuery('#op1')이 셀렉터. .html() 비었으면 걍 리턴해줌. 뭐 있으면 그걸로 대체하거나 뭐할 것

    // read span2
    y = jQuery('#op2').html()

    console.log(parseInt(x) + parseInt(y)) //output add span 1,2ps value string을 갖고 왔으므로.. 이거  해줘야 함.

    jQuery('#p_1').html(parseInt(x) + parseInt(y))
}


function say_hi() {
    alert('hi to u')
}


function f() {
    jQuery('#x').html("new content!")
}

function setup() {
    jQuery('#p_1').click(say_hi); // p에다가 냅다 그냥 ㅋㅋㅋ
    jQuery('#img1').click(f);
    // jQuery('#img1').click(f());   이러지 마.. ()
    
    
    jQuery('#img1').click(add_f); // 이럼 콘솔에 3 퉤
}

jQuery(document).ready(setup);


// jQuery('p').click(say_hello) // p에다가 냅다 그냥 ㅋㅋㅋ