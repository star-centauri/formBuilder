import React, { useEffect, useRef } from 'react';
import $ from "jquery";
import './App.css';

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");


function App() {
  const form = useRef(null);

  useEffect(() => {
    $(form.current).formBuilder();
  });

  return (
    <div className="App">
      <div id="fb-builder" ref={form}></div>
    </div>
  );
}

export default App;
