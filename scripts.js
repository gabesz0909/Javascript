
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
    $('main').append('<p>A p is appended in the main </p>');
    $('p').css('border','1px solid red');
}

mylittlefunction();
mylittlefunction();

$('#add').click(mylittlefunction);
$('#remove').click(function () {
    $('p:last-child').remove(); }); 

//$('h2').toggleClass('blue'); előző parancsot visszavonja ha 2- szer ugyanazt használjuk
