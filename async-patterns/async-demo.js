(() => {

    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        const result = x + y;
        console.log(`   [@service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`);
        const result = addSync(x,y);
        console.log(`[@client] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient;

    function addAsync(x,y, callbackFn){
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@service] returning result`);
            callbackFn(result);
        }, 4000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] invoking the service`);
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`);
        });
    }

    window['addAsyncClient'] = addAsyncClient;

})();