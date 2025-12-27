const API_URL = "http://localhost:5000";

async function calculateAPI(num1, num2, operator) {
  const res = await fetch(`${API_URL}/calculate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ num1, num2, operator })
  });

  const data = await res.json();
  return data.result;
}
