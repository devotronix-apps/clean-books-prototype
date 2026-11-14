'use strict';
const previewFrame=document.getElementById('phone-preview');
document.querySelectorAll('[data-screen],[data-tool]').forEach(button=>button.addEventListener('click',()=>{
  previewFrame.contentWindow.postMessage({source:'cleanbooks-preview',screen:button.dataset.screen,tool:button.dataset.tool},location.origin==='null'?'*':location.origin);
}));
