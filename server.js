const { Server } = require("socket.io"); // imports the Server class from the socket.io library.

// creates a new instance of the Server class and assigns it to the constant variable io
const io = new Server(8000, {
  // The constructor takes two arguments:
  // The first argument is the port number to listen on. In this case, it's 8000.
  // The second argument is an options object that allows configuring the server's behavior. Here, we set cors to true, which enables Cross-Origin Resource Sharing (CORS), allowing clients from different origins to connect to the server.
  cors: true,
});

// The first line creates a new Map object called emailToSocketIdMap, which will be used to map email addresses to socket IDs. This map will be used to store a record of which socket ID corresponds to which email address.
const emailToSocketIdMap = new Map();
// The second line creates a new Map object called socketidToEmailMap, which will be used to map socket IDs to email addresses. This map will be used to store a record of which email address corresponds to which socket ID.
const socketidToEmailMap = new Map(); //Together, these maps will be used to keep track of the mapping between email addresses and socket IDs, which is necessary for enabling communication between different users connected to the server.


// YAHA SE OR COMMENTS DALNE H
io.on("connection", (socket) => {
  console.log(`Socket Connected`, socket.id);
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id);
    socketidToEmailMap.set(socket.id, email);
    io.to(room).emit("user:joined", { email, id: socket.id });
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });

  socket.on("user:call", ({ to, offer }) => {
    io.to(to).emit("incomming:call", { from: socket.id, offer });
  });

  socket.on("call:accepted", ({ to, ans }) => {
    io.to(to).emit("call:accepted", { from: socket.id, ans });
  });

  socket.on("peer:nego:needed", ({ to, offer }) => {
    console.log("peer:nego:needed", offer);
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    console.log("peer:nego:done", ans);
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });
});