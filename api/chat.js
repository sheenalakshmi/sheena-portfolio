export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("[chat] No ANTHROPIC_API_KEY found in environment");
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    // Safely stringify body whether it's already an object or a string
    const bodyStr = typeof req.body === "string"
      ? req.body
      : JSON.stringify(req.body);

    console.log("[chat] Calling Anthropic, model:", req.body?.model);

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: bodyStr,
    });

    const responseText = await response.text();
    console.log("[chat] Anthropic status:", response.status);
    console.log("[chat] Anthropic response:", responseText.slice(0, 300));

    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      data = { error: "Unparseable response from Anthropic", raw: responseText.slice(0, 200) };
    }

    res.status(response.status).json(data);
  } catch (err) {
    console.error("[chat] Fetch failed:", err.message);
    res.status(500).json({ error: err.message });
  }
}
