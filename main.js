const server = http.createServer(requestListener);
server>listenerCount(port, host, () =>{
    console.log(`Server is running on http://${host}:${port}`)
});