jQuery(function() {
	// initTableRow();
	initToDoList();
});

function initToDoList() {
	jQuery('.todolist').each(function() {
		const list = jQuery(this);
		const btnAdd = jQuery('#btn-add');
		const input = jQuery('#input');
		const doneClass = 'done';
		let title = '';

		hideSaveBtn();
		btnAdd.on('click', addItem);

		list.on('click', '.btn-del', removeItem);
		list.on('click', '.btn-edit', editTitle);
		list.on('click', '.btn-done', eventDone);

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
					`<li class="px-2 list-group-item">
						<div class="btn-holder">
							<button class="btn btn-done" type="button"></button>
							<button class="btn btn-up" type="button"></button>
							<button class="btn btn-down" type="button"></button>
						</div>
						<h6>${title}</h6>
						<div class="btn-holder">
							<button class="btn btn-save" type="button"></button>
							<button class="btn btn-edit" type="button"></button>
							<button class="btn btn-del btn-close" type="button"></button>
						</div>
					</li>`
				);

				hideSaveBtn();
			}

			input.val('');
		}

		function removeItem(e) {
			jQuery(e.target).closest('li').remove();
		}

		function editTitle(e) {
			const holder = jQuery(e.target).closest('li');
			const listTitle = holder.find('h6');
			const btnEdit = holder.find('.btn-edit');
			const btnSave = holder.find('.btn-save');

			listTitle.attr('contenteditable', true);
			holder.addClass('editable');
			btnEdit.hide();
			btnSave.show();

			btnSave.on('click', function() {
				listTitle.attr('contenteditable', false);
				holder.removeClass('editable');
				btnSave.hide();
				btnEdit.show();
			});
		}

		function eventDone(e) {
			const holder = jQuery(e.target).closest('li');
			const buttons = holder.find('button:not(.btn-done):not(.btn-close)');

			if (holder.hasClass(doneClass)) {
				holder.removeClass(doneClass);

				buttons.each(function() {
					jQuery(this).show();
				});

				hideSaveBtn();
			} else {
				holder.addClass(doneClass);

				buttons.each(function() {
					jQuery(this).hide();
				});
			}
		}

		function hideSaveBtn() {
			jQuery('.btn-save').each(function() {
				jQuery(this).hide();
			});
		}

		function changePosition() {
			btnUp.on('click', function() {
			});

			btnDown.on('click', function() {
			});
		}

		changePosition();
	});
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