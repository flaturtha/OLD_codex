/*****************************************************************************/
/* BookCatalog: Event Handlers */
/*****************************************************************************/
Template.BookCatalog.events({
});

/*****************************************************************************/
/* BookCatalog: Helpers */
/*****************************************************************************/
Template.BookCatalog.helpers({
	books: function(){
		return Books.find();
	}
});

/*****************************************************************************/
/* BookCatalog: Lifecycle Hooks */
/*****************************************************************************/
Template.BookCatalog.onCreated(function () {
});

Template.BookCatalog.onRendered(function () {
});

Template.BookCatalog.onDestroyed(function () {
});
