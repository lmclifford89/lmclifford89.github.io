/*var button = document.getElementById('porBtn');

button.onclick = function() {
    var div = document.getElementById('hidCont');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};*/
$(document).ready(() => {
$('#porBtn').click(() =>{
	$('#hidCont').slideToggle(1000);

})

})
