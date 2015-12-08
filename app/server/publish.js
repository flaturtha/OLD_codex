


Meteor.publish('books', function () {
  Counts.publish(this, 'books', Books.find());
  return Books.find();
});