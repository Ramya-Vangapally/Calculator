async function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText = "Result: Invalid input";
    return;
  }

  try {
    const result = await calculateAPI(num1, num2, operator);
    document.getElementById("result").innerText = "Result: " + result;
  } catch {
    document.getElementById("result").innerText = "Result: Server error";
  }
}
