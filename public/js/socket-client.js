const onlineLabel = document.querySelector('#onlineLabel')
const offlineLabel = document.querySelector('#offlineLabel')
const textMessage = document.querySelector('#textMessage')
const sendButton = document.querySelector('#sendButton')

// client
const socket = io()

socket.on('connect', () => {
  offlineLabel.style.display = 'none'
  onlineLabel.style.display = ''
})

socket.on('disconnect', () => {
  onlineLabel.style.display = 'none'
  offlineLabel.style.display = ''
})

socket.on('send-message', (payload) => {
  console.log('From Server', payload)
})

sendButton.addEventListener('click', () => {
  const message = textMessage.value

  const payload = {
    message,
    uid: 'ABC123',
    date: new Date().toISOString()
  }

  socket.emit('send-message', payload, (id) => {
    console.log('From Server', id)
  })
})
