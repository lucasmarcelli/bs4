$(".show-more").click(function(){
     $(this).text(function(_, oldText) {
         return oldText === 'Show More' ? 'Show Less' : 'Show More';
     });
});

$(".show-colours").click(function(){
     $(this).text(function(_, oldText) {
         return oldText === 'View Pages' ? 'Hide Pages' : 'View Pages';
     });
});
