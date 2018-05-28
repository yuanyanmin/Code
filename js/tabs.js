var allList = $('tab_header').getElementsByTagName('li');
var domList = $('tab_content').getElementsByClassName('dom');

for(var i = 0;i < allList.length; i++){

	var li = allList[i];
	li.index = i;

	li.onmouseover = function(){

		for(var j = 0;j < allList.length; j++){
			allList[j].className = '';
			domList[j].style.display = 'none';
		}
		
		this.className = 'selected';
		domList[this.index].style.display = 'block';
	}
}

function $(id) {
	return typeof id === 'string' ? document.getElementById(id) : null;
}