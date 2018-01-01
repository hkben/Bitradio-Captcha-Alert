var testBtn = document.getElementById( "testBtn" );
var goToTabBtn = document.getElementById( "goToTabBtn" );

testBtn.addEventListener( "click", function() {
    chrome.runtime.sendMessage( {
        from: 'popup',
        subject: 'soundtest'
    } );

} );

goToTabBtn.addEventListener( "click", function() {
  chrome.runtime.sendMessage( {
      from: 'popup',
      subject: 'tabToFront'
  } );
} );
