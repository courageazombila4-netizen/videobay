const player = document.getElementById('player');
const fileInput = document.getElementById('fileInput');
const clearBtn = document.getElementById('clearBtn');

fileInput.addEventListener('change', (e)=>{
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  player.src = url;
  player.play().catch(()=>{});
});

// Drag & drop onto the player
player.addEventListener('dragover', (e)=>{ e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; });
player.addEventListener('drop', (e)=>{
  e.preventDefault();
  const file = e.dataTransfer.files && e.dataTransfer.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  player.src = url;
  player.play().catch(()=>{});
});

clearBtn.addEventListener('click', ()=>{
  player.removeAttribute('src');
  player.load();
});

// Helpful console hint
console.log('VideoBay ready — place MP4 files into the videos/ folder or use the "Load local file" button.');
