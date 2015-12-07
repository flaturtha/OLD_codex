/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/method_name': function () {
    // server method logic
  },
  'updateOPub':function(id, o_pub){
  	return Books.update({_id: id}, {$set: {o_pub: o_pub}});
  },
  'updateOPubDate':function(id, o_pubDate){
  	return Books.update({_id: id}, {$set: {o_pubDate: o_pubDate}});
  },
  'updatesubgenre':function(id, subgenre){
  	return Books.update({_id: id}, {$set: {subgenre: subgenre, upsert: true}});
  },
  'updatewordcount':function(id, wordCount){
  	return Books.update({_id: id}, {$set: {wordCount: wordCount, upsert: true}});
  },
  'updatecategory':function(id, category){
  	return Books.update({_id: id}, {$set: {category: category, upsert: true}});
  },
 	'updateillustrations-full':function(id, illustrations){
 		return Books.update({_id: id}, {$set: {"illustrations.full": illustrations, upsert: true}});
 	},
 	'updateillustrations-spot':function(id, illustrations){
 		return Books.update({_id: id}, {$set: {"illustrations.spot": illustrations, upsert: true}});
 	},
  'updateillustrations-caption':function(id, illustrations){
    return Books.update({_id: id}, {$set: {"illustrations.caption": illustrations, upsert: true}});
  },
  'updatekeywords':function(id, keywords){
  	return Books.update({_id: id}, {$set: {keywords: keywords, upsert: true}});
  },
  'updateexcerpt':function(id, excerpt){
  	return Books.update({_id: id}, {$set: {excerpt: excerpt, upsert: true}});
  },
  'updatepdStatus':function(id, pdStatus){
    return Books.update({_id: id}, {$set: {pdStatus: pdStatus, upsert: true}});
  },
  'updatedevStatus':function(id, devStatus){
    return Books.update({_id: id}, {$set: {devStatus: devStatus, upsert: true}});
  },
  'updatetrf':function(id, trf){
    return Books.update({_id: id}, {$set: {trf: trf, upsert: true}});
  }
});
