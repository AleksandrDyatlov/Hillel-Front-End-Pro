jQuery(function() {
	// initTableRow();
	initToDoList();
});

function initToDoList() {
	const list = jQuery('.todolist');
	// const listItems = list.find('li');
	const btnAdd = jQuery('#btn-add');
	const input = jQuery('#input');
	let title = '';

	btnAdd.on('click', addItem);

	list.on('click', '.btn-del', removeItem);

	input.keypress(function(e) {
		if (e.keyCode === 13) {
			addItem();
		}
	}).keyup(function() {
		title = input.val();
	});

	function addItem() {
		if (title) {
			list.append(
				`<li class="ps-3 pe-2 list-group-item">
					<h6>${title}</h6>
					<button class="btn btn-del btn-close" type="button"></button>
				</li>`
			);
		}

		input.val('');
	}

	function removeItem(e) {
		jQuery(e.target).parent().remove();
	}

	// jQuery(listItems).each(function() {
	// 	const holder = jQuery.this;
	// 	console.log(holder);
	// 	const btnDel = holder.find('.btn');
	//
	// 	btnDel.on('click', function() {
	// 		this.parent().remove();
	// 	});
	// });
}

// function initTableRow() {
// 	const win = jQuery(window);
//
// 	function checkHeight() {
// 		const firstRow = jQuery('.table-vertical tr');
// 		const secondRow = jQuery('.table-horizontal tr');
//
// 		for (let i = 0; i < firstRow.length; i++) {
// 			let firstRowItem = jQuery(firstRow[i]).removeAttr('style');
// 			let secondRowItem = jQuery(secondRow[i]).removeAttr('style');
// 			let firstRowItemHeight = firstRowItem.outerHeight();
// 			let secondRowItemHeight = secondRowItem.outerHeight();
//
// 			if (firstRowItemHeight < secondRowItemHeight) {
// 				firstRowItem.css('height', secondRowItemHeight);
// 			} else if (firstRowItemHeight > secondRowItemHeight) {
// 				secondRowItem.css('height', firstRowItemHeight);
// 			}
// 		}
// 	}
//
// 	checkHeight();
// 	win.on('resize orientationchange', checkHeight);
// }