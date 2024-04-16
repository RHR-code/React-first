import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  //userRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numAllow) str += "0123456789";
    if (charAllow) str += "`!@#$%^&*()_-+={}[]~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  const copypasstoclip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md bg-gray-700 px-4 my-8 text-orange-500 py-6 rounded-md">
        <h1 className="text-white text-center mb-6 text-lg font-bold">
          Password generator
        </h1>
        <div className="flex mb-5">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-s-md "
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copypasstoclip}
            className="bg-blue-700 text-white px-6 py-1 rounded-e-md hover:bg-blue-800 "
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-3">
          <div className="flex items-center gap-x-3">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
