export const challenge_1 = `
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  for (const item of arr) {
    if (seen.has(item.toString())) {
      duplicates.add(item.toString());
    } else {
      seen.add(item.toString());
    }
  }
  return Array.from(duplicates);
}

const testArray = [1, 2, 3, 2, 4, 5, 3, 6, 1, "a", "b", "a", "6"];
const duplicates = findDuplicates(testArray);

const response = document.getElementById('response');
response.innerHTML = \`
  <div>
    <h3>Find Duplicate items:</h3>
    <p><strong>Array:</strong> [\${testArray.join(', ')}]</p>
    <p><strong>Duplicate items:</strong> [\${duplicates.join(', ')}]</p>
  </div>
\`;`
