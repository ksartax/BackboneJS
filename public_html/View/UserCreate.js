DemoApplication.Views.UserCreate = Backbone.View.extend({

    template: _.template($("#user-create").html()),

    initialize: function () {
           
    },

    events: {
        'submit .user-create': 'createUserSubmit'
    },

    createUserSubmit: function () {
        this.trigger('form:submitted', {
            imie: this.$('#imie').val(),
            nazwisko: this.$('#nazwisko').val()
        });
    },

    render: function () {
        var html = this.template(this.model.toJSON());
        this.$el.append(html);
        return this;
    }

})


