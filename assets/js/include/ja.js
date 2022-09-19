function head() {
  $.ajax({
      url: "/assets/html/head/ja.html",
      cache: false,
      success: function(html){
          document.write(html);
      }
  });
}

function header() {
  $.ajax({
      url: "/assets/html/header/ja.html",
      cache: false,
      success: function(html){
          document.write(html);
      }
  });
}

function footer() {
  $.ajax({
      url: "/assets/html/footer/ja.html",
      cache: false,
      success: function(html){
          document.write(html);
      }
  });
}
