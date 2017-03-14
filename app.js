$(document).ready(function(e){
  $('button').on('click', function(event){
    console.log('clicked')
    event.preventDefault();
    console.log($('input').val());
    if( $('input').val() === 'decoy'){
      $('form').hide();
    }
  })
})
