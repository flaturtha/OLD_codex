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
	},
	booksCollection: function(){
		return Books
	},
	tableSettings: function(){
		return {
			rowsPerPage: 10,
			// showNavigation: 'auto',
			showColumnToggles: true,
			useFontAwesome: true,
			multiColumnSort: true,
			fields: [
				{key: 'view', label: 'Edit', tmpl: Template.bookDetailClicker, sortable: false, headerClass:'tableHeader'},
				{key: 'title', label: 'Title', headerClass:'tableHeader'},
				{key: 'author', label: 'Author', headerClass:'tableHeader'}, /* combine author/series into single col; if statement to show only the one available */
				// {key: 'series', label: 'Series', headerClass:'tableHeader'},
				{key: 'subgenre', label: 'Subgenre', headerClass:'tableHeader'},
				{key: 'wordCount', label: 'Word Count', headerClass:'tableHeader'},
				{key: 'illustrations.full', label: 'Illus: Full', headerClass:'tableHeader', cellClass: 'cellCentered'},
        {key: 'illustrations.spot', label: 'Illus: Spot', headerClass:'tableHeader', cellClass: 'cellCentered'},
				{key: 'o_pub', label: 'Original Pub', headerClass:'tableHeader'},
				{key: 'o_pubDate', label: 'Orig Pub Date', headerClass:'tableHeader'},
				{key: 'devStatus', label: 'Dev Status', headerClass:'tableHeader'},
				{key: 'pubStatus', label: 'Pub Status', headerClass:'tableHeader'},
			]
		};
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
