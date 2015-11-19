TabularTables = {};

TabularTables.Books = new Tabular.Table({
	name: "Books",
	collection: Books,
	columns: [
		{
		  tmpl: Meteor.isClient && Template.bookViewCell
		},
		{data: "title", title: "TITLE"},
		{data: "author", title: "AUTHOR"},
		{data: "o_pub", title: "ORIG PUBLICATION"},
		{data: "o_pubdate", title: "O_PUB DATE"},
		{data: "subgenre", title: "SUBGENRE"},
		{data: "wordCount", title: "WORD COUNT"},
		// {
		// 	data: "illustrations",
		// 	title: "ILLUSTRATIONS",
		// 	render: function(full, spot){
		// 		var full = this.full.count();
		// 		var spot = this.spot.count();
		// 		console.log("full, spot")
				// if (full >= 1 && spot >= 1) {
				// 	return "Full:" full + "| Spot:" spot;
				// } else
				// if (full >= 1 ) {
				// 	return "Full:" full;
				// } else
				// if (spot >= 1) {
				// 	return "Spot:" spot;
				// };
		// 	}
		// },
		{data: "illustrations", title: "ILLUSTRATIONS"},
		{data: "devStatus", title: "DEV STATUS"},
		{data: "_id", title: "CASEFILE NUMBER"}
	],
	responsive: true,
	autoWidth: false
});









