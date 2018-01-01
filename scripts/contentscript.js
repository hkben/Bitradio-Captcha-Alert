var recaptchaDiv = document.getElementById( "recaptcha-modal" );

var observer = new MutationObserver( function( mutations ) {
    if ( recaptchaDiv.style.display == 'block' ) {
        console.log( "recaptchaDiv Changed!" );

        chrome.runtime.sendMessage( {
            from: 'content',
            subject: 'domChanged',
            value: true
        } );

    } else {

      chrome.runtime.sendMessage( {
        from: 'content',
        subject: 'domChanged',
        value: false
      } );

    }

} );

observer.observe( recaptchaDiv, {
    attributes: true,
    attributeFilter: [ 'style' ]
} );
