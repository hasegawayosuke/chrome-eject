var npwin32;
var mciSendString;

document.addEventListener( "DOMContentLoaded", function (){
	chrome.browserAction.onClicked.addListener( function( tab ){
		if( npwin32 === undefined ){
			npwin32 = document.getElementById( "p" );
		}
		if( mciSendString === undefined ){
			mciSendString = npwin32.import( "winmm.dll", "DWORD mciSendStringW( LPCWSTR, DWORD, UINT, DWORD )" );
		}
		if( mciSendString){
			var r = mciSendString( "set cdaudio door open", 0, 0, 0 );
		}
	} );
} );
