# Socket fundamentals

## Issue

Let's imagine that we have this architecture, a server where we have our Node application running and a client computer.

Normally what we will do is a GET type http request and the server will return information to me.
For example: Returns a user, the data of that user, the information of a chat.
The server will respond with a response (Successful or failed).
It generates the chat screen, shows the person's information, whatever, but later the server may realize that the information it sent to you was updated somehow.
There are new chat messages or the profile of the user that was requested has changed.

This is where the problem lies. The server is not going to be able to tell the client computer.
"Hey, I have new information that interests you."
It's not able to do that directly until the user makes a request again.

Now let's think if we wanted to establish a communication with another computer, for example, send a private message like Facebook, Twitter, etc.

If we wanted to send you a private message that basically one has to first send the message to the server and the server determines which user to send it to and then send the message to that user.

Do we already see the problem?
If we had the same architecture as the ones in the image, both machines should be constantly making requests to see if there are new messages for them.

<p align="center">
  <img align="center" src="https://github.com/castromaciel/socket-fundamentals/assets/83432755/e5e0850c-6417-4438-a095-8dc7fd8aa2e1" width="75%" height="75%" />
</p>

It would be interesting if the server could trigger a notification saying that there is new information that interests a particular user.

And basically those are the sockets.

## Sockets

A socket allows us to maintain active active communication with the client machine and the server.
That is, the server will be able to fire notifications to the client machine and it can interact with whatever the server responds to.

<p align="center">
  <img align="center" src="https://github.com/castromaciel/socket-fundamentals/assets/83432755/a7371b8c-c2ab-4dcf-8391-a1ddf75f917e" width="75%" height="75%" />
</p>

Usually we can send strings, booleans, numbers, or an entire object.
This allows us to be notified in real time.
For example, you connect to a new computer and it establishes an active, active communication.
Also, a message could be sent from machine one to machine two through the server and the notification would be instantaneous.

Both machines should not be making requests to obtain that information, but rather both computers will be notified when they receive a particular message.

Now, with sockets we can not only do that, we can also be notified when a user disconnects, such as Maciel disconnected from the chat.
Also when a new user connects. Welcome, Maciel.

Or notify everyone that someone has joined the chat session.
And also something very important is that we will know when a user reconnects.

We know that the Internet can fail and in this case the use of sockets is super useful because the user can reconnect and get the same session he was working with before.

The other users will be able to know that such a person has reconnected.
And perhaps the most important thing that makes sockets extremely flexible is that we will be able to fire custom events. These custom events are what you want to do.

For example, if you have a graph, then you can receive a notification from the server when there is new information that modifies the graph.
If it was a chat, we could be notified when there are new messages.

Anyway, you can do anything with custom events.
