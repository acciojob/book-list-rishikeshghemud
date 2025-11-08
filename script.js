//your JS code here. If required.

const submitBtn = document.querySelector('#submit');
const tbody = document.querySelector('#book-list')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const title = document.querySelector('#title');
	const author = document.querySelector('#author');
	const isbn = document.querySelector('#isbn');

	const row = document.createElement('tr');
	row.innerHTML = `
		<tr>
			<td>${title.value}</td>
			<td>${author.value}</td>
			<td>${isbn.value}</td>
			<td><button class="delete">x</button></td>
		</tr>
	`;

	tbody.appendChild(row);
	
	form.reset();
});

tbody.addEventListener('click', (e)=> {
	if(e.target.classList.contains('delete')) {
		e.target.closest('tr').remove();
	}
});
