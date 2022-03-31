import React from 'react';

export default function CheckBox() {
  return (
    <div class="form-check" style={{position:'absolute', top:'0.5rem', left:'0.8rem'}}>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label class="form-check-label" for="flexCheckDefault"/>
    </div>
  );
};