
// console.log('Script file is loaded'); alap parancs
//Single line comment

/*  Multiple 
line 
of 
comments
*/

//$('css selector').action()
console.log('Script file is loaded');

$('h1').html('THIS IS DONE BY JAVASCRIPT');
$('p').css('padding','20px');
$('h2').toggleClass('blue');



function mylittlefunction() {
    //condition: number of ps is smaller than 5
    if ($('p').length< 5) {
    $('main').append('<p>A p is appended in the main </p>');
    }else {
        console.log('We reached the maximum paragraph number');
    }
    $('p').css('border','1px solid red');
}

mylittlefunction();
mylittlefunction();

$('#add').click(mylittlefunction);
$('#remove').click(function () {
    $   ('p:last-child').remove(); }); 


let colors=['orange','yellow','blue'];

$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[0]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[1]);
$('#box-container').append('<div class="box"></div>');
$('.box:last-child').css('background', colors[2]);



//if (Condition that true or false) {
    //condition true
//} else{ 
    //condition false
//}

//$('h2').toggleClass('blue'); előző parancsot visszavonja ha 2- szer ugyanazt használjuk
