(function() {

  return {


  resources: {
      GIF_URL       : 'https://media.giphy.com/media/Jjtioi0nvMnFC/giphy.gif',
      TICKET_NUM    : 225,
      MODAL_CLASS   : 'my_modal'
    },


    events: {
      //'app.activated':'showModal'
      'ticket.save':'saveHookHandler'
      //'ticket.submit.done':'saveHookHandler'
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
      if ((ticket.id()==this.resources.TICKET_NUM)&&(this.ticket().status() == 'solved')) {
        return this.promise(function(done, fail) {          
          this.switchTo('modal', {
            gif_url: this.resources.GIF_URL
          });
          this.toggleModal(this.resources.MODAL_CLASS, true);           
          console.log('still fired');
          done();
        }); 
      }
      else return true;
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
