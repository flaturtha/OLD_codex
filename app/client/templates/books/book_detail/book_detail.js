/*****************************************************************************/
/* BookDetail: Event Handlers */
/*****************************************************************************/
Template.BookDetail.events({
});

Template.metadata.events({
	'dblclick .editing_Input':function(evt,tmpl){
		Session.set('editingInput',true);
	},
	// 'blur .editing_opub': function(evt,tmpl){
	// 	var ele = tmpl.find('.o_pub');
	// 	Meteor.call('updateOPub', this._id,ele.value);
	// 	Session.set('editingInput',false);
	// },
	'keyup .input_opub': function(evt,tmpl){
		if (evt.which === 27 || evt.which === 13){
			evt.preventDefault();
			var ele = tmpl.find('.o_pub');
			Meteor.call('updateOPub', this._id,ele.value);
			Session.set('editingInput',false);
		}
	},

	// 'blur .editing_opubdate': function(evt,tmpl){
	// 	var ele = tmpl.find('.o_pubdate');
	// 	Meteor.call('updateOPubDate', this._id,ele.value);
	// 	Session.set('editingInput',false);
	// },
	'keyup .input_opubdate': function(evt,tmpl){
		if (evt.which === 27 || evt.which === 13){
			evt.preventDefault();
			var ele = tmpl.find('.o_pubdate');
			Meteor.call('updateOPubDate', this._id,ele.value);
			Session.set('editingInput',false);
		}
	},

	'keyup .input_subgenre': function(evt,tmpl){
		if (evt.which === 27 || evt.which === 13){
			evt.preventDefault();
			var ele = tmpl.find('.subgenre');
			Meteor.call('updatesubgenre', this._id,ele.value);
			Session.set('editingInput',false);
		}
	},

	'keyup .input_wordCount': function(evt,tmpl){
		if (evt.which === 27 || evt.which === 13){
			evt.preventDefault();
			var ele = tmpl.find('.input_wordCount');
			Meteor.call('updatewordcount', this._id,ele.value);
			Session.set('editingInput',false);
		}
	},

	'keyup .input_category': function(evt,tmpl){
		if (evt.which === 27 || evt.which === 13){
			evt.preventDefault();
			var ele = tmpl.find('.input_category');
			Meteor.call('updatecategory', this._id,ele.value);
			Session.set('editingInput',false);
		}
	},

	'keyup .input_illustrations': function(evt,tmpl){
		if (evt.which === 27 || evt.which === 13){
			evt.preventDefault();
			var ele = tmpl.find('.input_illustrations');
			Meteor.call('updateillustrations', this._id,ele.value);
			Session.set('editingInput',false);
		}
	},

	'keyup .input_keywords': function(evt,tmpl){
		if (evt.which === 27 || evt.which === 13){
			evt.preventDefault();
			var ele = tmpl.find('.input_keywords');
			Meteor.call('updatekeywords', this._id,ele.value);
			Session.set('editingInput',false);
		}
	},

	'keyup .input_excerpt': function(evt,tmpl){
		if (evt.which === 27 || evt.which === 13){
			evt.preventDefault();
			var ele = tmpl.find('.input_excerpt');
			Meteor.call('updateexcerpt', this._id,ele.value);
			Session.set('editingInput',false);
		}
	},
});

/*****************************************************************************/
/* BookDetail: Helpers */
/*****************************************************************************/
Template.BookDetail.helpers({
});

Template.metadata.helpers({
	editingInput:function(){
		return Session.get('editingInput');
	}
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
