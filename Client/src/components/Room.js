import "../App.css";

function Room({ setRoomPage, roomId, setRoomId, socket, setSinglePlayer }) {
  const joinGame = () => {
    socket.emit("joinRoom", roomId);
    setSinglePlayer(false);
  };

  const createRoom = () => {
    socket.emit("createRoom", { singlePlayer: false });
    setRoomPage("W");
    setSinglePlayer(false);
  };

  const singlePlayer = () => {
    socket.emit("createRoom", { singlePlayer: true });
    setSinglePlayer(true);
  };

  return (
    <div className="Room">
      <div>
        <button className="btn single" onClick={singlePlayer}>
          Single Player
        </button>
      </div>
      <div>OR</div>
      <div>
        <button className="btn create" onClick={createRoom}>
          Create Room
        </button>
      </div>
      <div>OR</div>
      <div>
        <input
          placeholder="Room Id"
          className="btn"
          onChange={(event) => {
            setRoomId(event.target.value);
          }}
        />
        <button className="btn join" onClick={joinGame}>
          Join Room
        </button>
      </div>
    </div>
  );
}

export default Room;
