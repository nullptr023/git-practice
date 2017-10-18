console.log('load index.js');

function showAuthForm() {
	console.log('showAuthForm');
	document.getElementById('login-form').style.display = 'none';
	document.getElementById('two-auth-form').style.display = 'block';
}

function showLoginForm () {
	console.log('showLoginForm');
	document.getElementById('login-form').style.display = 'block';
	document.getElementById('two-auth-form').style.display = 'none';
}
