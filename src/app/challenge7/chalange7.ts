export const challenge_7 =  `function getMaxValue(carrotTypes, capacity) {
  if (!Array.isArray(carrotTypes) || !Number.isFinite(capacity) || capacity <= 0) return 0;

  // Keep valid items and sort by value density (price/kg) desc
  const items = carrotTypes
    .filter(c => c && c.kg > 0 && c.price > 0)
    .map(c => ({ ...c, ratio: c.price / c.kg }))
    .sort((a, b) => b.ratio - a.ratio);

  let remaining = Math.floor(capacity);
  let totalValue = 0;

  for (const { kg, price } of items) {
    if (remaining <= 0) break;
    const count = Math.floor(remaining / kg); // how many of this type fit
    if (count > 0) {
      totalValue += count * price;
      remaining -= count * kg;
    }
  }
  return totalValue;
}

// Example:
const carrotTypes = [{ kg: 5, price: 100 }, { kg: 7, price: 150 }, { kg: 3, price: 70 }];
const capacity = 36;


const response = document.getElementById('response');
response.innerHTML = \`
  <div>
    <p><strong>Maximum bag value:</strong> \${getMaxValue(carrotTypes, capacity)}</p>
  </div>\`
`