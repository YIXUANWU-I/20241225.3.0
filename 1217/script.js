
function navigateTo(pageId) {
   
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    
    document.getElementById(pageId).classList.add('active');

    
    const activePage = document.getElementById(pageId);
    const textToSpeak = Array.from(activePage.querySelectorAll('h1, p')).map(el => el.textContent).join(' ');
    speak(textToSpeak);
}


function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-TW';
        speechSynthesis.speak(utterance);
    } else {
        alert('您的瀏覽器不支援語音功能');
    }
}


function switchRange() {
    const ranges = ['短', '中', '長'];
    const currentStatus = document.getElementById('obstacle-status');
    let currentIndex = ranges.indexOf(currentStatus.dataset.range || '短');
    currentIndex = (currentIndex + 1) % ranges.length;
    const newRange = ranges[currentIndex];
    currentStatus.dataset.range = newRange;
    currentStatus.textContent = `掃描範圍已切換為：${newRange}`;
    speak(`掃描範圍已切換為：${newRange}`);
}