export const challenge_2 = `async function printWithExponentialDelay(arr) {

    const output = document.getElementById('output');
    for (let i = 0; i < arr.length; i++) {
        const delay = Math.pow(2, i) * 1000; // 1s, 2s, 4s, 8s...
        setTimeout(() => {
        output.innerHTML += \`<p>"\${arr[i]}" - \${delay/1000}s</p>\`;
    }, delay);
  }
}

const response = document.getElementById('response');
response.innerHTML = \`<div id="output">
<p>printing with exponential delay:</p></div>\`;
const testArray = ['a', 'b', 'c', 'd'];
printWithExponentialDelay(testArray);`;
