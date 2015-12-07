/*****************************************************************************/
/* DevStatus: Event Handlers */
/*****************************************************************************/
Template.DevStatus.events({
	// "click .toggle-checked": function(evt,tmpl){
	// 	var isChecked = evt.target.checked;
	// 	// Session.set('toggle-checked', true);
	// 	console.log("The last selected checkbox is " + this._id);
	// 	console.log(isChecked);
	// 	return Books.update({_id: this._id}, {$set: {devStatus: this._id, upsert: true}});
	// 	// Meteor.call('updateToggleChecked', this._id);
	// }
});

/*****************************************************************************/
/* DevStatus: Helpers */
/*****************************************************************************/
Template.DevStatus.helpers({
		books: function(){
		return Books.find();
	},
	// currentStatus: function(){
	// 	return Session.equals('selectedStatusId', this._id);
	// }
});

/*****************************************************************************/
/* DevStatus: Lifecycle Hooks */
/*****************************************************************************/
Template.DevStatus.onCreated(function () {
});

Template.DevStatus.onRendered(function () {
});

Template.DevStatus.onDestroyed(function () {
});
