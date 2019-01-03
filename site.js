$('#circle').hover(function() {
    $('p').html("We changed the text!"); 
   });

   $('#circle').click(function() {
    $('img').attr('src', 'https://static.boredpanda.com/blog/wp-content/uploads/2018/10/cutest-puppy-dog-pictures-coverimage.jpg'); 
   });

   $('.square').click(function() {
       $(this).css('background-color', 'blue');
   });

   $(function() {
    $('#draggable').draggable();
    });