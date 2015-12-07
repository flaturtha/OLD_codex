/*****************************************************************************/
/* BookDetail: Event Handlers */
/*****************************************************************************/
Template.BookDetail.events({
});

Template.pubStats.events({
	'change [type=checkbox]':function(){
		var documentId = this._id;
		var isCompleted = this.completed;
		console.log(documentId);
		if(isCompleted){
			Books.update({_id: documentId}, {$set: {"pubStatus.site": false}});
			console.log("completed set to false; Task marked as incomplete.");
		} else {
			Books.update({_id: documentId}, {$set: {"pubStatus.site": true}});
			console.log("completed set to true; Task marked as complete.")
		}
	}
});

Template.bvHead.events({
	'dblclick .editing_excerpt':function(evt,tmpl){
		Session.set('editingInput',true);
		var editingInput = Session.get('editingInput');
	},
	'keyup .input_excerpt': function(evt,tmpl){
		if (evt.which === 27 || evt.which === 13){
			evt.preventDefault();
			console.log("excerpt clicked");
			var ele = tmpl.find('.input_excerpt');
			Meteor.call('updateexcerpt', this._id,ele.value);
			Session.set('editingInput',false);
		}
	},
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

	// 'keyup .input_illustrations': function(evt,tmpl){
	// 	if (evt.which === 27 || evt.which === 13){
	// 		evt.preventDefault();
	// 		var ele = tmpl.find('.input_illustrations');
	// 		Meteor.call('updateillustrations', this._id,ele.value);
	// 		Session.set('editingInput',false);
	// 	}
	// },

	'keyup .input_illustrations-full': function(evt,tmpl){
		if (evt.which === 27 || evt.which === 13){
			evt.preventDefault();
			var ele = tmpl.find('.input_illustrations-full');
			Meteor.call('updateillustrations-full', this._id,ele.value);
			Session.set('editingInput',false);
		}
	},

	'keyup .input_illustrations-spot': function(evt,tmpl){
		if (evt.which === 27 || evt.which === 13){
			evt.preventDefault();
			var ele = tmpl.find('.input_illustrations-spot');
			Meteor.call('updateillustrations-spot', this._id,ele.value);
			Session.set('editingInput',false);
		}
	},

	'keyup .input_caption': function(evt,tmpl){
		if (evt.which === 27 || evt.which === 13){
			evt.preventDefault();
			var ele = tmpl.find('.input_caption');
			Meteor.call('updateillustrations-caption', this._id,ele.value);
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
			console.log("excerpt clicked");
			var ele = tmpl.find('.input_excerpt');
			Meteor.call('updateexcerpt', this._id,ele.value);
			Session.set('editingInput',false);
		}
	},

	'keyup .input_pdStatus': function(evt,tmpl){
		if (evt.which === 27 || evt.which === 13){
			evt.preventDefault();
			console.log("pdStatus clicked");
			var ele = tmpl.find('.input_pdStatus');
			Meteor.call('updatepdStatus', this._id,ele.value);
			Session.set('editingInput',false);
		}
	},

	'keyup .input_devStatus': function(evt,tmpl){
		if (evt.which === 27 || evt.which === 13){
			evt.preventDefault();
			console.log("devStatus clicked");
			var ele = tmpl.find('.input_devStatus');
			Meteor.call('updatedevStatus', this._id,ele.value);
			Session.set('editingInput',false);
		}
	},

	'keyup .input_trf': function(evt,tmpl){
		if (evt.which === 27 || evt.which === 13){
			evt.preventDefault();
			console.log("trf clicked");
			var ele = tmpl.find('.input_trf');
			Meteor.call('updatetrf', this._id,ele.value);
			Session.set('editingInput',false);
		}
	}
});

/*****************************************************************************/
/* BookDetail: Helpers */
/*****************************************************************************/
Template.BookDetail.helpers({
});

Template.pubStats.helpers({
	'checked': function(){
		var isCompleted = this.pubStatus.site;
		if(isCompleted){
			return "checked";
		} else {
			return "";
		}
	}
});

Template.bvHead.helpers({
	editingInput:function(){
		return Session.get('editingInput');
	}
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










