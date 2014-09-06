(function() {

  return {
    events: {
      'app.activated':'doSomething',
      //'ticket.save':'showModal',
       'hidden .my_modal': 'afterHidden' // The 'hidden' event is fired when the modal (.my_modal) has finished being hidden from the user (will wait for css transitions to complete).

    },

    doSomething: function() {
    	services.notify('I\'m alive');
    },
    showModal: function() {
    	this.switchTo('modal');
    	  //this.$(".my_modal").modal();
    	this.toggleModal("my_modal", true);
    	return false;

    },

    toggleModal: function(modalClass, showModal) { // Toggle modal
      var classSelector = this.makeClassSelector(modalClass),
          modalParam;
          console.log(classSelector);
      if (showModal) {
        modalParam = { backdrop: true, keyboard: false };
      } else {
        modalParam = 'hide';
      }
      this.$(classSelector).modal(modalParam);
    },

    makeClassSelector: function(className) {
      return '.' + className;
    },    

afterHidden: function () {
      console.log("hidden in Process");
    }    
  };



}());
