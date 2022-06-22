function App() {
  const get = async () => {
    const res = await fetch("http://vios.iium.edu.my:8000/api/v1/user");

    console.log(res);
  };
  get();
  return (
    <>
      <div>welcome to frontend</div>
    </>
  );
}

export default App;