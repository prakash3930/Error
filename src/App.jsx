const App = () => {
  const onClientButton = async () => {
    const newWindow = window.open("https://www.google.com", "", "width=1820,height=820,top=120");

   const body= newWindow.document.body;

console.log(body)

    
  };

  return (
    <div>
      <button onClick={onClientButton}>Open new window</button>
    </div>
  );
};

export default App;