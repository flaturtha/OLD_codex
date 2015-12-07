// Meteor.methods({
//   parseUpload(data){
//     check(data,Array);
//     for (let i = 0; i < data.length; i++){
//       let item = data[i],
//         exists = Books.findOne({_id: item._id});

//     	if (!exists){
//     		Books.insert(item);
//     	} else {
//     		console.log('Rejected. This item already exists.');
//     	}
//     }
//   }
// });