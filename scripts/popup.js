var testBtn = document.getElementById( "testBtn" );
var tabBtn = document.getElementById( "tabBtn" );

testBtn.addEventListener( "click", function() {
    chrome.runtime.sendMessage( {
        from: 'popup',
        subject: 'soundtest'
    } );

} );

tabBtn.addEventListener( "click", function() {
    chrome.runtime.sendMessage( {
        from: 'popup',
        subject: 'tabToFront'
    } );

} );
