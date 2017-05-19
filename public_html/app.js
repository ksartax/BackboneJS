window.DemoApplication = {
    Models: {},
    Collections: {},
    Views: {},

    start: function (data) {
        var users = new DemoApplication.Collections.Users(data.users);
        router = new DemoApplication.Router();

        router.on('route:home', function () {
            router.navigate('users', {
                trigger: true,
                replace: true
            });
        });

        router.on("route:delete", function (id) {
            var user = users.get(id);
            if (user) {
                users.remove(user);
            }

            router.navigate("users", true)
        })

        router.on('route:users', function () {
            var usersView = new DemoApplication.Views.Users({
                collection: users
            });

            $('.main-container').html(usersView.render().$el);
        });

        router.on('route:createUser', function () {
            var createUserView = new DemoApplication.Views.UserCreate({
                model: new DemoApplication.Models.User
            });

            createUserView.on('form:submitted', function (attr) {
                attr.id = users.isEmpty() ? 1 : (_.max(users.pluck('id')) + 1);
                users.add(attr);
                router.navigate("users", true);
            })

            $(".main-container").html(createUserView.render().$el);
        });

        router.on('route:edit', function (id) {
            var user = users.get(id);
            if (user) {
                var updateUser = new DemoApplication.Views.UserCreate({
                    model: user
                });

                updateUser.on("form:submitted", function (attr) {
                    user.set(attr);
                    router.navigate("users", true);
                })

                $(".main-container").html(updateUser.render().$el);
            }
        })

        Backbone.history.start();
    }
}

