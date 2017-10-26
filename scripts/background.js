var myAudio = new Audio();
var page_id;

myAudio.src = chrome.extension.getURL( "sounds/alert.mp3" );

chrome.runtime.onMessage.addListener( function( msg, sender ) {
    if ( msg.from === 'content' ) {
        if ( msg.subject === 'showPageAction' ) {
            myAudio.play();
            // chrome.pageAction.show(sender.tab.id);
        }

        if ( msg.subject === 'pageLoaded' ) {
            page_id = sender.tab.id;
        }
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
