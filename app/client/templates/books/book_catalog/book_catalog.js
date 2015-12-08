/*****************************************************************************/
/* BookCatalog: Event Handlers */
/*****************************************************************************/
Template.BookCatalog.events({
});

/*****************************************************************************/
/* BookCatalog: Helpers */
/*****************************************************************************/
// SOME SUCH VARIATION ON THE CHECKORX FUNCTION TO COLOR PD VS COPYRIGHT
// var checkOrX = function (value) {
//     var html;
//     // first, normalize the value to a canonical interpretation
//     if (typeof value === 'boolean')
//       value = {
//         support: value
//       };

//     if (value === null || value === undefined) {
//       html = '<span style="color: orange; font-weight: bold">?</span>';
//     } else {
//       if (value.support === true)
//         html = '<span style="color: green">&#10004;</span>'
//       else if (value.support === false)
//         html = '<span style="color: red">&#10008;</span>';
//       else
//         html = '<span style="color: lightblue">' + value.support + '</span>';
//       if (value.link)
//         html += ' (<a href="' + value.link + '">more</a>)';
//       }
//     return new Spacebars.SafeString(html);
//   };

Template.BookCatalog.helpers({
	books: function(){
		return Books.find();
	},
	tableSettings: function(){
		return {
			rowsPerPage: 10,
			// showNavigation: 'auto',
			showColumnToggles: true,
			useFontAwesome: true,
			multiColumnSort: true,
			showRowCount: true,
			fields: [
				{key: 'view', label: 'Edit', tmpl: Template.bookDetailClicker, sortable: false, headerClass:'tableHeader'},
				{key: 'title', label: 'Title', headerClass:'tableHeader', cellClass: 'bookTitle'},
				{key: 'author', label: 'Author', headerClass:'tableHeader'}, /* combine author/series into single col; if statement to show only the one available */
				// {key: 'series', label: 'Series', headerClass:'tableHeader'},
				{key: 'subgenre', label: 'Subgenre', headerClass:'tableHeader'},
				{key: 'wordCount', label: 'Word Count', headerClass:'tableHeader'},
				{key: 'illustrations.full', label: 'Illus: Full', headerClass:'tableHeader', cellClass: 'cellCentered'},
        {key: 'illustrations.spot', label: 'Illus: Spot', headerClass:'tableHeader', cellClass: 'cellCentered'},
				{key: 'o_pub', label: 'Original Pub', headerClass:'tableHeader'},
				{key: 'o_pubDate', label: 'Orig Pub Date', headerClass:'tableHeader'},
				{key: 'pdStatus', label: 'PD Status', headerClass:'tableHeader'/*, fn: checkOrX*/},
				// {key: 'devStatus', label: 'Dev Status', headerClass:'tableHeader'}, /* deleted until tracking system works! */
				{key: 'trf', label: 'TRF', headerClass:'tableHeader'}
				// {key: 'pubStatus', label: 'Pub Status', headerClass:'tableHeader'},
			]
		};
	},
	// tableCountSettings: function(){
	// 	return {
	// 		showFilter: false,
	// 		showNavigation: never,
	// 		rowsPerPage: 0,
	// 		showRowCount: true,
	// 		showNavigationRowsPerPage: false
	// 	};
	// },


	filter1settings: function(){
		return {
			fields: [illustrations.full, illustrations.spot]
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
