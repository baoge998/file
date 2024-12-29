document.getElementById('runWorkflow').addEventListener('click', async () => {
    const inputValue = document.getElementById('inputValue').value;

    const response = await fetch('https://api.github.com/repos/baoge456/serv00-login/actions/workflows/login.yaml/dispatches', {
        method: 'POST',
        headers: {
            'Authorization': 'token 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',
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ref: 'main', // 或者你的默认分支
            inputs: {
                example_input: inputValue
            }
        })
    });

    if (response.ok) {
        alert('工作流已成功触发！');
    } else {
        alert('触发失败：' + response.statusText);
    }
});
