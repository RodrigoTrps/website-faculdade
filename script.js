document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault()
    const message = document.getElementById('loginMessage')
    message.textContent = 'Login em processamento...'
    setTimeout(() => {
        window.location.replace("login.html");
    }, 1500)
})

const pages = {
    inicio: `
        <section class="login-box">
            <h2>Acesse sua conta</h2>
            <form id="loginForm">
                <input type="text" placeholder="Agência" required>
                <input type="text" placeholder="Conta" required>
                <input type="password" placeholder="Senha" required>
                <button type="submit">Entrar</button>
            </form>
            <div id="loginMessage"></div>
        </section>
    `,
    produtos: `
        <section class="login-box">
            <h2>Nossos Produtos</h2>
            <p>Cartões, Empréstimos, Conta Corrente, Poupança e muito mais.</p>
        </section>
    `,
    atendimento: `
        <section class="login-box">
            <h2>Atendimento</h2>
            <p>Central 24h: 0800 123 456</p>
            <p>WhatsApp: (11) 91234-5678</p>
        </section>
    `,
    ajuda: `
        <section class="login-box">
            <h2>Ajuda</h2>
            <p>Dúvidas frequentes, suporte técnico e orientações de segurança.</p>
        </section>
    `,
    "criar-conta": `
        <section class="login-box">
            <h2>Crie sua conta</h2>
            <form id="signupForm">
                <input type="text" placeholder="Nome completo" required>
                <input type="email" placeholder="Email" required>
                <input type="text" placeholder="CPF" required>
                <input type="password" placeholder="Senha" required>
                <button type="submit">Cadastrar</button>
            </form>
            <div id="signupMessage"></div>
        </section>
    `
}

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        const page = link.getAttribute('data-page')
        const content = document.getElementById('content')
        content.innerHTML = pages[page] || pages.inicio
        if (page === 'inicio') initLogin()
        if (page === 'criar-conta') initSignup()
    })
})

function initLogin() {
    document.getElementById('loginForm')?.addEventListener('submit', function(e) {
        e.preventDefault()
        const message = document.getElementById('loginMessage')
        message.textContent = 'Login em processamento...'
        setTimeout(() => {
            message.textContent = 'Login realizado com sucesso!'
            message.style.color = 'green'
        }, 1500)
    })
}

function initSignup() {
    document.getElementById('signupForm')?.addEventListener('submit', function(e) {
        e.preventDefault()
        const message = document.getElementById('signupMessage')
        message.textContent = 'Criando sua conta...'
        setTimeout(() => {
            message.textContent = 'Conta criada com sucesso!'
            message.style.color = 'green'
        }, 1500)
    })
}
