jQuery.fn.extend({
  DisplayValueAsColumn: function(items) {
    var self=this;
    var $self=$(this);
    if(items){
       Object.keys(items).forEach(function(key){
          var option=$('<option>');
          option.val(key);
          option.text(items[key]);
          $self.append(option);
      })
      $self.attr('size', Object.keys(items).length);
    }  
    $self.wrap('<div class="select-value-to-column"></div>').wrap('<span>');
    
    var displaySelect=$('<select class="display-select"></select>');
    $self.before(displaySelect);
    $self.before($('<br>'));
    $self.addClass('value-select'); 
    
    displaySelect.on('click',function(){
      $self.slideToggle(110);
    })
    $self.on('click',function(){
      $self.hide();
      displaySelect.empty();
      var selectedOption=$self.find('option:selected').clone().appendTo(displaySelect);
    })
  }
});
