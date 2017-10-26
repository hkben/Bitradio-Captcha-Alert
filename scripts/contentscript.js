var recaptchaDiv = document.getElementById( "recaptcha-modal" );

var observer = new MutationObserver( function( mutations ) {
    if ( recaptchaDiv.style.display == 'block' ) {

        chrome.runtime.sendMessage( {
            from: 'content',
            subject: 'showPageAction'
        } );
    }

} );

observer.observe( recaptchaDiv, {
    attributes: true,
    attributeFilter: [ 'style' ]
} );


chrome.runtime.sendMessage( {
    from: 'content',
    subject: 'pageLoaded'
} );
