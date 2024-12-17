
var formbutton = document.getElementById('button');

var item = document.getElementById('item');

let Names = 'Angular';
document.getElementById('name').innerText= Names ;

formbutton.addEventListener('click', youClicked);

let items = [
	{name:'HTML'},
	{name:'CSS'},
	{name:'Java Script'},
	{name:'C++'}
]
items.forEach((ele)=>{
	console.log(ele)
	createListItem(ele.name)
})
function youClicked(e){
	e.preventDefault();
	var value =document.getElementById('value').value;
	if(value==""){
		alert('ENTER VALID VALUE');
	}else{
			createListItem(value);
			//document.getElementsByName('addItem').reset();
		}
}

function createListItem(text){
	var li = document.createElement('li');

			li.className='itemContent';

			li.appendChild(document.createTextNode(text));

			

			var but = document.createElement('button');

			but.className='but';
		
			but.appendChild( document.createTextNode('X'));
			
			li.appendChild(but);
			item.appendChild(li); 

			
}
var del = document.getElementById('item');

del.addEventListener('click', remove);

function remove(e){
	if(e.target.classList.contains('but')){
		if(confirm('Are you sure ?')){
			var delParent = e.target.parentElement;
			del.removeChild(delParent);			
		}
	}
}

var hell = document.getElementById('search');

	hell.addEventListener('keyup', searchfn);

function searchfn(e){
	var text = e.target.value.toLowerCase();
	var items = item.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


