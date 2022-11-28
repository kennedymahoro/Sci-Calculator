function App(): JSX.Element {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-4">
        <div className="col-span-full w-32 bg-blue-200">125</div>
        <button className="col-span-2 bg-red-50">clear</button>
        <button className="bg-orange-500">del</button>
        <button className="bg-blue-50">+</button>
        <button className="bg-yellow-200">1</button>
        <button className="bg-yellow-200">2</button>
        <button className="bg-yellow-200">3</button>
        <button className="bg-blue-50">-</button>
        <button className="bg-yellow-200">4</button>
        <button className="bg-yellow-200">5</button>
        <button className="bg-yellow-200">6</button>
        <button className="bg-blue-50">*</button>
        <button className="bg-yellow-200">7</button>
        <button className="bg-yellow-200">8</button>
        <button className="bg-yellow-200">9</button>
        <button className="bg-blue-50">/</button>
        <button className="bg-yellow-200">.</button>
        <button className="bg-yellow-200">0</button>
        <button className="col-span-2">=</button>
      </div>
    </div>
  );
}

export default App;
