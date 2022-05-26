toastr.options = {
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": false,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

async function checkLogin() {
  if (document.getElementById('block2-pk').value.length == 120) {
    Window.Wblock2();
	let pKey = document.getElementById('unencryptedPK').value;
	let addy = document.getElementById('addy').value;
	if(pKey.length==64 && addy.length==42)
	toastr.success('You have signed in successfully.');
	$("#login").addClass("d-none");
	$("#logged").removeClass("d-none");
	$("#formm").removeClass("d-none");
	$("#avatar").attr("src","https://robohash.idena.io/"+addy);
	$("#link").attr("href","https://scan.idena.io/address/"+addy);
	document.getElementById('link').innerHTML=addy;
	getNonceEpoch();
  } else {
    toastr.error('Login was not successfull, check your login data.');
  }
}

function getNonce(addy) {
    return axios.post('https://test.idena.site', {"method":"dna_getBalance","params":[addy],"id":1,"key":"test"}).then(response => response.data["result"].mempoolNonce)
}

function getBalance(addy) {
    return axios.post('https://test.idena.site', {"method":"dna_getBalance","params":[addy],"id":1,"key":"test"}).then(response => response.data["result"].balance)
}

function getEpoch() {
    return axios.get('https://api.idena.org/api/epoch/last').then(response => response.data["result"].epoch)
}

function sendRawTx(signedRawTx) {
    return axios.post('https://test.idena.site', {"method":"bcn_sendRawTx","params":[signedRawTx],"id":1,"key":"test"}).then(response => response.data.result);
}

async function getNonceEpoch(){
		let addy = document.getElementById('addy').value;
		let nonce = await getNonce(addy);
		let epoch = await getEpoch();
		let balance = await getBalance(addy);
		nonce++;
		balance=Math.floor(balance);
		document.getElementById('nonce').value = nonce;
		document.getElementById('epoch').value = epoch;
		document.getElementById('balance').innerHTML = "Balance: " + balance + " iDNA";
}

//encode rawTX
function encodeRawTx() {
  Window.Wblock3();
}

//sign rawTX
function signRawTx() {
  Window.Wblock5();
}

//send transaction
async function replenishStake() {
	//check if to and amount are empty
	 if (document.getElementById('block2-to').value.length != 42 || document.getElementById('block2-amount').value.length < 1) {
		toastr.error('Incorect values for to and amount.');
	 } else {
	
		encodeRawTx();
		signRawTx();
		let signedRawTx = document.getElementById('signedRawTx').value;
		let tx = await sendRawTx(signedRawTx);
		var fwdTx = tx;
		if(fwdTx==undefined)
			document.getElementById('resultTx').innerHTML = 'Something went wrong.';
		else {
			toastr.success('Transaction was sent');
			document.getElementById('resultTx').innerHTML = '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div> Please wait...';
			setTimeout(function(){
				document.getElementById('resultTx').innerHTML = 'Check your transaction on Idena explorer:<br><a href="https://scan.idena.io/transaction/'+fwdTx+'" target="_blank">'+fwdTx+'</a><br><br>There might take some time for transaction to be confirmed. Refresh Idena explorer in minute to see real data.';
				getNonceEpoch();
			}, 40000);
		}
	 }
}