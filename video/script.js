const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPause");
const seekBar = document.getElementById("seekBar");
const timeDisplay = document.getElementById("timeDisplay");
const loopButton = document.getElementById("loopButton");

let isLooping = false;

// ควบคุมการเล่นและหยุด
playPauseBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = "⏸";
    } else {
        video.pause();
        playPauseBtn.textContent = "▶";
    }
});

// อัปเดตแถบความคืบหน้า
video.addEventListener("timeupdate", () => {
    seekBar.value = (video.currentTime / video.duration) * 100;
    timeDisplay.textContent = formatTime(video.currentTime) + " / " + formatTime(video.duration);
});

// อัปเดตตำแหน่งของวิดีโอจากแถบเลื่อน
seekBar.addEventListener("input", () => {
    video.currentTime = (seekBar.value / 100) * video.duration;
});

// ฟังก์ชันปรับเวลาให้เป็นรูปแบบ 00:00
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec.toString().padStart(2, "0")}`;
}

// เปลี่ยนสถานะ Loop
loopButton.addEventListener("click", () => {
    isLooping = !isLooping;
    loopButton.textContent = isLooping ? "🔁 (ON)" : "🔁";
    video.loop = isLooping; // ตั้งค่าให้วิดีโอเล่นซ้ำ
});
