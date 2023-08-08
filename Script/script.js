$(Document).ready(function () {
    $(function () {
        $('#head').load('meta.html');
        $('#header').load('header.html');
        $('#footer').load('footer.html');
        $('#aboutheader').load('header.html');
    });
});

// Functions show and hide login and signup form 
function showLoginForm() {
    document.getElementById('form').style.display = 'flex';
    document.getElementById('subform').style.display = 'flex';
}


function closeForm() {
    document.getElementById('form').style.display = 'none';
    document.getElementById('subform').style.display = 'none';
}