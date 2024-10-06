const loadAllPhones = ()=>{
	// console.log('wow 3 seconds gone');
	document.getElementById('spinner').style.display
	='none';
}



const handleSearch = () =>{
	// console.log('hello');

	document.getElementById('spinner').style.display = 'block';

	setTimeout(()=>{
		loadAllPhones();
	}, 3000);
}