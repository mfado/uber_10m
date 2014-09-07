(function() {

  return {


  resources: {
      GIF_URL       : 'https://media.giphy.com/media/Jjtioi0nvMnFC/giphy.gif',
      TICKET_NUM    : 226,
      MODAL_CLASS   : 'my_modal'
    },


    events: {
      'app.activated':'showModal'
      //'ticket.save':'saveHookHandler',
      //'ticket.save.done':'saveHookHandler'
    },

    showModal: function() {
    	var ticket = this.ticket();
  		if (ticket.id()==this.resources.TICKET_NUM) {
        this.switchTo('modal', {
          gif_url: this.resources.GIF_URL
        });
  			this.toggleModal(this.resources.MODAL_CLASS, true);		
  		}
    },

    saveHookHandler: function() {
  		var ticket = this.ticket();
  		console.log(ticket.status());		
    	this.switchTo('modal',this.resources.GIF_URL);
    	//this.$(".my_modal").modal();
    	this.toggleModal("my_modal", true);
    	//return false;
    },

    // helper functions

    toggleModal: function(modalClass, showModal) { // Toggle modal
      var classSelector = this.makeClassSelector(modalClass),
          modalParam;
      if (showModal) {
        modalParam = { backdrop: true, keyboard: false };
      } else {
        modalParam = 'hide';
      }
      this.$(classSelector).modal(modalParam);
    },

    makeClassSelector: function(className) {
      return '.' + className;
    }  
  };



}());
