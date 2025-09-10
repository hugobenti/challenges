export const challenge_4 = `
function areBracketsBalanced(str) {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  
  for (const char of str) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// Testes
const testCases = [
  '{[]}',
  '{(])}',
  '{([)]}',
  ')((())',
  '([{}])',
  '([)]'
];

const response = document.getElementById('response');
response.innerHTML = \`
  <div style="font-family: monospace; padding: 15px; background: #f8f9fa; border-radius: 8px;">
    \${testCases.map(test => \`
      <p>
        <code style="background: #e9ecef; padding: 2px 6px; border-radius: 3px;">\${test}</code>
        => <strong style="color: \${areBracketsBalanced(test) ? '#28a745' : '#dc3545'}">
          \${areBracketsBalanced(test)}
        </strong>
      </p>
    \`).join('')}
  </div>\`;`;