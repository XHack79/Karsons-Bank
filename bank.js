function fakeLogin() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  if (u && p) {
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('error-msg').textContent = "Login failed.";
  }
  return false;
}

// Terminal logic for transfer.html
if (location.pathname.includes('transfer.html')) {
  const out = document.getElementById('terminal-output');
  const input = document.getElementById('terminal-input');

  function log(text) {
    out.innerHTML += text + "\n";
    out.scrollTop = out.scrollHeight;
  }

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      log("> " + cmd);
      if (cmd.startsWith('transfer')) {
        const amt = cmd.split(' ')[1];
        log(`Initiating transfer of $${amt}...`);
        setTimeout(() => {
          log("Transfer failed: flagged by system as suspicious.");
        }, 1000);
      } else if (cmd === 'help') {
        log("Available commands:\n transfer [amount]\n logout\n help");
      } else if (cmd === 'logout') {
        window.location.href = "index.html";
      } else {
        log("Unknown command. Type 'help'.");
      }
      input.value = '';
    }
  });
}
