Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/books/add', {
	name: 'addBook',
	controller: 'BooksController',
	action: 'add',
	where: 'client'
});

Router.route('/books', {
	name: 'bookCatalog',
	controller: 'BooksController',
	action: 'list',
	where: 'client'
});

Router.route('/books/:_id', {
  name: 'bookDetail',
  controller: 'BooksController',
  action: 'view',
  where: 'client'
});