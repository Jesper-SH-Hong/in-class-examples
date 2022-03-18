function add_f() {
    // read span 1 
     x = jQuery('#op1').html();
     
     y = jQuery('#op2').html()
    //read span 2
    // output addition 
    jQuery('#p_1').html(parseInt(x) + parseInt(y)); 
 }

function f() {
     jQuery('#x').html("new content!")
}

// function say_hi() {
//     alert('hi to u')
// }
 
 
 function setup() {
 
     jQuery('#img_cat').click(add_f);
     jQuery('#p_1').click(say_hi); 
     jQuery('#img_cat').click(f);
     jQuery('#img_cat').click(add_f);
 }
 
 jQuery(document).ready(setup);