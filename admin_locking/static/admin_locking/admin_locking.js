(function($) {
  var lock_url = window.location.pathname + 'locking/',
      csrftoken = getCookie('csrftoken'), timer;

  $(function() {
    // only applies to edit forms
    if (!$('body').hasClass('change-form') || (window.location.pathname.indexOf('/add/') > -1)){return;}

    // check and set lock
    update_lock();
    // clear lock when clicking "save"
    $('div.submit-row input[type=submit]').click(clear_lock);
    $(window).unload(clear_lock);
  });

  function update_lock() {
    $.ajax({
      url: lock_url,
      type: 'post',
      data: {url: window.location.pathname},
      headers: {"X-CSRFToken": csrftoken},
      dataType: 'json',
      success: function(data) {
        if ((data.status === 'locking') && $('div.submit-row:first').hasClass('locked'))  {
          // we just acquired the lock while it was locked before
          $('div.submit-row').html('<p>' + data.message + ' <a href="' +
              window.location.pathname + '">' + data.link_message + '</a></p>')
            .removeClass('locked').addClass('unlocked');
        }
        if ((data.status === 'locked') && !$('div.submit-row:first').hasClass('locked')) {
          // it's still locked
          $('div.submit-row').html('<p>' + data.message + '</p>').addClass('locked').css({background: '#d00', color: '#fff', textAlign: 'center'});
          $('#content-main input,textarea,select').prop('readonly', true).prop('disabled', true);
        }
        // keep checking/setting lock while on the page
        timer = setTimeout(update_lock, data.lock_timeout*1000);
      }
    });
  }

  function clear_lock() {
    if (!$('div.submit-row').hasClass('locked')) {
      $.ajax({
        url: lock_url,
        type: 'post',
        data: {url: window.location.pathname, action: 'clear'},
        headers: {"X-CSRFToken": csrftoken},
        dataType: 'json',
      });
    }
  }

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
})(django.jQuery);
