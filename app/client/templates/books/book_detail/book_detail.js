/*****************************************************************************/
/* BookDetail: Event Handlers */
/*****************************************************************************/
Template.BookDetail.events({
});

Template.meta.editingInput = function(){
	return Session.get('editingInput');
}

Template.meta.events({
	'dblclick .def_item':function(evt,tmpl){
		Session.set('editingInput',true);
	},
	'keyup .def_text': function(evt,tmpl){
		if(evt.which === 13 || evt.which === 27) {
			var def_text = tmpl.find('.def_text').value;
			Books.update(this._id,{$set:{def_text:def_text, def_item:Session.get('def_item')}});
			Session.set('editingInput', false);
		}
	}
});

/*****************************************************************************/
/* BookDetail: Helpers */
/*****************************************************************************/
Template.BookDetail.helpers({
});

/*****************************************************************************/
/* BookDetail: Lifecycle Hooks */
/*****************************************************************************/
Template.BookDetail.onCreated(function () {
});

Template.BookDetail.onRendered(function () {
});

Template.BookDetail.onDestroyed(function () {
});
