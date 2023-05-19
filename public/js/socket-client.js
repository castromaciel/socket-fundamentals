const onlineLabel = document.querySelector('#onlineLabel')
const offlineLabel = document.querySelector('#offlineLabel')

// client
const socket = io()

socket.on('connect', () => {
  offlineLabel.style.display = 'none'
  onlineLabel.style.display = ''
  console.log('connection established')
})

socket.on('disconnect', () => {
  onlineLabel.style.display = 'none'
  offlineLabel.style.display = ''
  console.log('Disconnect from server')
})