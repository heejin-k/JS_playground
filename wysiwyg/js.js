/* //간편하지만 웹 표준이 아니다
document.querySelectorAll('.options button').forEach(item => item.addEventListener('click', () => {
    const command = item.dataset.command;
    if (command === 'h1' || command === 'h2' || command === 'h3' || command === 'p') {
        document.execCommand('formatBlock', false, command);
    } else {
        document.execCommand(command);
    }
}));
*/

//강의영상 보고 추가
// const editor = document.querySelector('.editor');

// document.querySelectorAll('.options button').forEach(item => item.addEventListener('click', function(){
//     const command = item.dataset.command;
//     if (command)
// }))