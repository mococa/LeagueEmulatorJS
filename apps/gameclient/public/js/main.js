Neutralino.init();

Neutralino.events.on("windowClose", () => {
  Neutralino.app.exit();
});

document.addEventListener('keydown', disableBrowserHotkeys);
document.addEventListener('keyup', disableBrowserHotkeys);

/**
 * @description
 * Disable F5, Ctrl + R and Ctrl + F
 * 
 * @param {KeyboardEvent} e
 */
function disableBrowserHotkeys(e) {
  const f5 = e.key === 'F5';
  const ctrlR = e.key === 'r' && e.ctrlKey;
  const ctrlF = e.key === 'f' && e.ctrlKey;

  if (ctrlR || f5 || ctrlF) {
    e.preventDefault();
  }
};