function Letter({ value, color }) {
  return (
    <div className="letter" id={color}>
      {value}
    </div>
  );
}

export default Letter;
