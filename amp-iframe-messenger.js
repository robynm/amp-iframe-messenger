/**
 * Listen for messages from AMP iframes and log them to the console
 */
window.addEventListener('message', event => {
    if ( event.data && event.data.sentinel == '__AMP__' && event.data.payload ) {
        console.info('AMP iframe message: ', event.data.payload);
    }
});
