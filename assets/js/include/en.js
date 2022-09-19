function head() {
  $.ajax({
      url: "/assets/html/head/en.html",
      cache: false,
      success: function(html){
          document.write(html);
      }
  });
}

function header() {
  $.ajax({
      url: "/assets/html/header/en.html",
      cache: false,
      success: function(html){
          document.write(html);
      }
  });
}

function footer() {
  $.ajax({
      url: "/assets/html/footer/en.html",
      cache: false,
      success: function(html){
          document.write(html);
      }
  });
}
