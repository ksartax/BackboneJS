DemoApplication.Views.Users = Backbone.View.extend({

    template: _.template($("#users").html()),

    initialize: function () {

    },

    events: {
       
    },
    
    renderOne: function(user){
        var htmls = new DemoApplication.Views.User({model : user});
        this.$(".users-container").append(htmls.render().$el);
    },

    render: function () {
        var html = this.template();
        this.$el.append(html);
        this.collection.each(this.renderOne, this);
        return this;
    }

})


