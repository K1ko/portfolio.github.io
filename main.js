var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsidXNlciIsIm1haWwiLCJzdG9yZSJdLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNWM2MTBiNDlmZGE5ZGIyYzA4MGJmNDgzIiwiZXhwIjoxNTg2NjI4NTUwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDYxLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwNjEvIn0.sb_ybk24nafWoCSj9m3_pJ6FSxz0xf68E_exSZXRY2U';

$(document).ready(function () {
  $("form").submit(handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();

  var meno = $('#meno').val();
  var priezvisko = $('#priezvisko').val();
  var msg = $('#msg').val();
  var email = $('#email').val();

  var data = {
    to: "kristian.cervenka@gmail.com",
    subject: meno + " " + priezvisko + " - Kontaktný formulár",
    body: msg,
    from: email
  }

  $.ajax({
    type: "POST",
    url: "https://stored.azurewebsites.net/api/mail",
    headers: {
      "Authorization": 'Bearer ' + token
    },
    data: JSON.stringify(data),
    contentType: "application/json"
  })
    .done(function () {
      $('.successful').css("display", "block");
      $('#myForm').trigger("reset");
    })
    .fail(function (error) {
      $('.failed').css("display", "block");
    });
}



$(document).ready(function () {
  $('a[href*=\\#]').bind('click', function () {
    var target = $(this).attr("href"); // Set the target as variable
  });
});

$(window).scroll(function () {
  var scrollDistance = $(window).scrollTop();
  // Assign active class to nav links while scolling
  $('.page-section').each(function (i) {
    var x = $(this).position().top;
    if (getWidth() >= 768) {
      y = x - 50;
    }
    else {
      y = x - 256;
    }
    if (y <= scrollDistance) {
      $('nav ul a.this.underline').removeClass('underline');
      $('nav ul a.this').eq(i).addClass('underline');
    }
  });
}).scroll();

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}
/*
function getWidth()
{
  return Math.min(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetHeight.width,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth,
    document.documentElement.clientTop,
    
  );
}*/

$(window).on('resize', function () {
  if (getWidth() <= 750) {
    $('nav ul li').removeClass('animated');
  }
  else {
    $('nav ul li').addClass('animated');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  if (getWidth() <= 750) {
    $('nav ul li').removeClass('animated');
  }
});


