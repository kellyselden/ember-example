export function initialize(instance) {
  let store = instance.container.lookup('service:store');

  let socket = window.io();

  socket.on('save', msg => {
    store.fetch(msg.type, msg.id);
  });
  socket.on('remove', msg => {
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
