import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({getSelectionText}) => {
  return (
      <div id="control-panel">
          <div id="format-actions">
            <button className="format-action" type="button" onClick={()=>getSelectionText('b')}><b>B</b></button>
            <button className="format-action" type="button" onClick={()=>getSelectionText('i')}><i>I</i></button>
            <button className="format-action" type="button" onClick={()=>getSelectionText('u')}><u>U</u></button>
          </div>
      </div>
  );
}

export default ControlPanel;
