export function initialize(instance) {
  var store = instance.container.lookup('store:main');

  var socket = window.io();

  socket.on('save', function(msg) {
    store.fetch(msg.type, msg.id);
  });
  socket.on('remove', function(msg) {
    if (store.hasRecordForId(msg.type, msg.id)) {
      store.getById(msg.type, msg.id).deleteRecord();
    }
  });

  instance.registry.register('io:main', socket, { instantiate: false });
}

export default {
  name: 'socket-io',
  initialize: initialize
};
