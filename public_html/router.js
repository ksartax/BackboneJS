DemoApplication.Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'users': 'users',
        'users/new': 'createUser',
        'user/edit/:id': 'edit',
        'user/delete/:id' : 'delete'
    }
})


