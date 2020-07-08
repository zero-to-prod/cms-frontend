import Echo from "laravel-echo"

window.io = require('socket.io-client');

window.Echo = new Echo({
  broadcaster: 'socket.io',
  host: window.location.hostname + ':6001'
});


window.Echo.channel(`orderStatus`) // Broadcast channel name
  .listen('OrderShipped', (e) => { // Message name
      console.log(e); // The operation performed by the message, the parameter e is the data carried
    }
  );
