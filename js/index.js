function runServiceWorker() {
    if (!navigator.serviceWorker) return;
    navigator.serviceWorker.register('/sw.js')
    .then(function(){
        console.log('Success');
    })
    .catch(function(){
        console.log('Error');
    })
}
runServiceWorker();