var textbool = true;
var index = 0;

$( document ).ready(function() {
      $.get("/jokes",function(data){
          // TODO: change HTML instead of alert
          $("#question").html(data.setup);
          $("#punchlineright").html(data.punchlineright);
		  $("#punchlinewrong").html(data.punchlinewrong);

          index = data.id;

          if (data.rightans === undefined) {
              $("#rightans").html(0);
          } else {
              $("#rightans").html(data.rightans);
          }

      },"json");
});

$(function() {
    $(".blue").click(
        function() {
            $.get("/jokes",function(data){
                // TODO: change HTML instead of alert
                $("#question").html(data.setup);
                $("#punchlineright").html(data.punchlineright);
				$("#punchlinewrong").html(data.punchlinewrong);

                index = data.id;

                if (data.rightans === undefined) {
                    $("#rightans").html(0);
                } else {
                    $("#rightans").html(data.rightans);
                }

            },"json")
        }
    );
});


$(function() {
  $(".green").click(
    function() {
    // $.post("/upvote");
    $.ajax({
      url: '/upvote',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({id:index}),

      success: function(data, status, xhr) {
          $("#Votes").html(data.votes);
      }
    });
  });
});

$(function() {
  $(".green2").click(
    function() {
    // $.post("/downvote");
    $.ajax({
      url: '/downvote',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({id:index}),

      success: function(data, status, xhr) {
          $("#Votes").html(data.votes);
      }
    });
  });
});
