const Child = ({ sendData }) => {
  const data = 'Hello From Child';
  return (
    <div>
      <div>____________________</div>
      <button onClick={() => sendData(data)}>Send Data</button>
    </div>
  );
};

export default Child;
