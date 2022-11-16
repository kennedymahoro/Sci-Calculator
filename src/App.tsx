function App(): JSX.Element {
  return (
    <div className="flex justify-center items-center">
      <div className="w-20">
        <div className="grid grid-cols-4">
          <div className="col-span-full w-32 ">125</div>
          <button className="col-span-2">clear</button>
          <button>del</button>
          <button>+</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>*</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>/</button>
          <button>.</button>
          <button>0</button>
          <button className="col-span-2">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
