var flexRunning = false;
$( document ).bind( 'pageinit', function() {
  $( '.emailAddress' ).unbind( 'blur', E.form.validateEmailAddress ).blur( E.form.validateEmailAddress );
  $( '.submit' ).unbind( 'tap', E.form.submit ).tap( E.form.submit );
  $( '.Evalidate' ).unbind( 'tap', E.resetStyle ).tap( E.resetStyle );
  var slider = $( '.flexslider' );
  if( undefined !== slider.flexslider && !flexRunning && 0 < slider.length ) {
    $( '.flexslider' ).flexslider();
    flexRunning = true;
  }
} );

var E = {
  form: {
    submit: function( ev ) {
//      var form = $( ev.target ).parents( 'fieldset' );
var form = $( ev.target ).parents( '.form' );
      if( !E.form.validateEmailAddress( form ) ) {
        form.children( '.emailAddress' ).focus();
        return;
      }
      $.ajax( {
        data: {
          emailAddress: form.children( '.emailAddress' ).val(),
          message: form.children( '.message' ).val(),
          forenameSurname: form.children( '.forenameSurname' ).val(),
          city: form.children( '.city' ).val(),
          zip: form.children( '.zip' ).val(),
          street: form.children( '.street' ).val(),
          interestCorp: form.find( '.interestCorp input[type=checkbox]:checked' ).val()
        },
        dataType: 'json',
        success: E.form.submitS,
        type: 'POST',
        url: '/formmail.php'
      } );
    },
    submitS: function( data ) {
      switch( data.action ) {
        case 'revalidate':
          $.each( data.list, function( i, value ) {
            $( '.' + value ).addClass( 'Erevalidate' );
            $( '.' + value + 'Revalidate' ).removeClass( 'Ehidden' );
          } );
        break;
        case 'thankyou':
          document.location = '/form-bestaetigung.html';
        break;
      }
    },
    validateEmailAddress: function( form ) {
      if( undefined !== form.target ) form = $( form.target ).parent();
      var el = form.children( '.emailAddress' );
      var emailAddress = el.val();
      var emailRegexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if( !emailRegexp.test( emailAddress ) ) {
        el.addClass( 'Erevalidate' );
        $( '.emailAddressRevalidate' ).removeClass( 'Ehidden' );
        return false;
      }
      return true;
    }
  },
  resetStyle: function( ev ) {
    $( ev.target ).removeClass( 'Erevalidate' );
    $( '.emailAddressRevalidate' ).addClass( 'Ehidden' );
  }
};

$( document ).bind( "mobileinit", function(){
  $.extend(  $.mobile , {
    loadingMessage: "Feuerkultur"
  } );
  setDefaultTransition();
} );

function setDefaultTransition(){
  var winwidth = $( window ).width(), trans ="fade";

  if( winwidth >= 1000 ) trans = "none";
  else if( winwidth >= 650 ) trans = "fade";

  $.mobile.defaultPageTransition = trans;
}

$( function() {
  $( window ).bind( "throttledresize", setDefaultTransition );
} );



$(function(){
  // bind change event to select
  $('#select-choice-1').bind('change', function () {
      var url = $(this).val(); // get selected value
      if (url) { // require a URL
          window.location = url; // redirect
      }
      return false;
  });
});







