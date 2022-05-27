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

function getNonce(addy) {
    return axios.post('https://test.idena.site', {"method":"dna_getBalance","params":[addy],"id":1,"key":"test"}).then(response => response.data["result"].mempoolNonce)
}

function getEpoch() {
    return axios.get('https://api.idena.org/api/epoch/last').then(response => response.data["result"].epoch)
}

async function getNonceEpoch(){
		let addy = document.getElementById('block2-addy').value;
		let nonce = await getNonce(addy);
		let epoch = await getEpoch();
		nonce++;
		document.getElementById('nonce').value = nonce;
		document.getElementById('epoch').value = epoch;
}

//generate link
async function genLink() {
	//check if addy, to and amount are empty
	 if (document.getElementById('block2-addy').value.length != 42 ||document.getElementById('block2-to').value.length != 42 || document.getElementById('block2-amount').value.length < 1) {
		toastr.error('Incorect values for address, to or amount.');
	 } else {
		//get nonce and epoch
		await getNonceEpoch();
		//encode rawTx and display a link
		Window.Wblock3();
	 }
}