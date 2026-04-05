async function askAdvisor() {
    const question = document.getElementById('userQuestion').value;
    if (!question) return alert("Please type your question.");

    document.getElementById('advisorResponse').innerHTML = "Thinking...";

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_OPENAI_API_KEY' // ضع مفتاحك هنا
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
                {role: "system", content: "You are a professional advisor. Give detailed, thoughtful, and practical advice on life, work, business, and legal matters. Do not generate anything else."},
                {role: "user", content: question}
            ],
            max_tokens: 500
        })
    });

    const data = await response.json();
    document.getElementById('advisorResponse').innerHTML = data.choices[0].message.content;
}