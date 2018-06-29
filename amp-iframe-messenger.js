window.addEventListener('message', function(event) {
  if ( event.data && event.data.sentinel && event.data.sentinel == '__AMP__' && event.data.payload ) {
    console.info('AMP iframe message: ', event.data.payload);
  }
});
