(function() {

  return {


  resources: {
      GIF_URL       : 'https://www.dropbox.com/s/19rbfd26lcvurbc/uber.gif?raw=1',
      TICKET_NUM    : 225,
      MODAL_CLASS   : 'my_modal'
    },


    events: {
      'app.activated':'showModal'
      //'ticket.save':'saveHookHandler'
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
      console.log("hello there!");
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
