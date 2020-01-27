import React, { useState, useRef } from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';

const App = () => {

  let allText = useRef();
  const [newText, setNewText] = useState(() => getMockText().then(value => setNewText(value)));

  const getSelectionText = (tag) => {
    var txt = '';
    if (txt = window.getSelection) {
      txt = window.getSelection().toString();
    } else {
      txt = document.selection.createRange().text;
    }
    const textAndTags = `<${tag}>${txt}</${tag}>`;
    setNewText(newText.replace(txt, textAndTags));
  }
  return (
      <div className="App">
          <header>
              <span>Simple Text Editor</span>
          </header>
          <main>
              <ControlPanel getSelectionText={getSelectionText}/>
              <FileZone allText={allText} newText={newText}/>
          </main>
      </div>
  );
}

export default App;
