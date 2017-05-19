DemoApplication.Views.User = Backbone.View.extend({

    template : _.template($("#user").html()),

    events: {
      "click #user-delete" : 'userDelete',
      'click #user-edit' : 'userEdit'
    },
    
    userDelete : function(){
      console.log("Siema");  
    },
    
    userEdit : function(){
        console.log("Witam")
    },

    initialize: function () {

    },

    render: function () {
        var html = this.template(this.model.toJSON());
        this.$el.append(html);
        return this;
    }

})


