import React from 'react';
import './FileZone.css';



const FileZone = ({allText, newText}) => {

  return (
      <div id="file-zone">
          <div id="file" ref={allText} dangerouslySetInnerHTML={{__html: newText}} >
          </div>
      </div>
  );
}

export default FileZone;
