var myAudio = new Audio();
var page_id;

myAudio.src = chrome.extension.getURL( "sounds/alert.mp3" );

chrome.runtime.onMessage.addListener( function( msg, sender ) {
  if ( msg.from === 'content' && msg.subject === 'domChanged' ) {
    page_id = sender.tab.id;

    if ( msg.value ) {

      myAudio.play();

      chrome.browserAction.setBadgeText( {
        text: "!"
      } );

    } else {

      chrome.browserAction.setBadgeText( {
        text: ""
      } );

    }
  }

  if ( msg.from === 'content' && msg.subject === 'pageLoad' ) {

    page_id = sender.tab.id;

    chrome.browserAction.setBadgeText( {
      text: ""
    } );

  }

    if ( msg.from === 'popup' ) {
        if ( msg.subject === 'soundtest' ) {
            myAudio.play();
        }

        if ( msg.subject === 'tabToFront' ) {
            if ( page_id != null ) {

                chrome.tabs.update( page_id, {
                    "active": true,
                    "highlighted": true
                }, function( tab ) {
                    console.log( "Completed updating tab .." + JSON.stringify( tab ) );
                } );
            }
        }

    }

} );
