window.onload = function() {
  const passwordInput = document.getElementById("password");
  const showPasswordCheckbox = document.getElementById("show-password");
  const aziendaInput = document.getElementById("azienda");
  const userInput = document.getElementById("user");
  const btnInput = document.getElementById("btn-submit");

  // Desabilita o checkbox "Mostrar senha" inicialmente
  showPasswordCheckbox.disabled = true;

  // Habilita ou desabilita o checkbox "Mostrar senha" de acordo com o campo de senha
  passwordInput.addEventListener("input", function() {
    showPasswordCheckbox.disabled = passwordInput.value.trim() === "";
  });
};

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const showPasswordCheckbox = document.getElementById("show-password");

  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text"; // Mostra a senha
  } else {
    passwordInput.type = "password"; // Esconde a senha
  }
}

function createMenu() {
  return `
  <div class="menu">
  <a href="vendite.php" class="menu__item">
  <h3>Vendite</h3>
  <p>Funzioni per la gestione delle vendite, prelievo, fatturazione...</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
    class="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
    <path fill-rule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
  </svg>
</a>
<a href="servizi.php" class="menu__item">
  <h3>Servizi</h3>
  <p>Gestione delle prestazioni professionali.</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
    class="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
    <path fill-rule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
  </svg>
</a><a href="acquisti.php" class="menu__item">
  <h3>Acquisti</h3>
  <p>Gestione degli acquisti (ordini fornitori, ricevimento merce...).</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
    class="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
    <path fill-rule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
  </svg>
</a><a href="contabilita.php" class="menu__item">
  <h3>Contabilità</h3>
  <p>Contabilità generale (Conti, libri IVA, bilancio, registrazioni...).</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
    class="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
    <path fill-rule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
  </svg>
</a><a href="assoc_gestione.php" class="menu__item">
  <h3>Associazione</h3>
  <p>Gestione dei soci / clienti (iscrizioni, attivazione, fatturazione...).</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
    class="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
    <path fill-rule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
  </svg>
</a><a href="produzione.php" class="menu__item">
  <h3>Produzione</h3>
  <p>Gestione della trasformazione delle materie prime.</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
    class="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
    <path fill-rule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
  </svg>
</a><a href="magazzino.php" class="menu__item">
  <h3>Magazzino</h3>
  <p>Gestione del magazzino.</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
    class="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
    <path fill-rule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
  </svg>
</a><a href="anagrafica.php" class="menu__item">
  <h3>Anagrafica</h3>
  <p>Gestione dei dati anagrafici (clienti, fornitori, rappresentanti, banche...)</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
    class="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
    <path fill-rule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
  </svg>
</a><a href="sistema.php" class="menu__item">
  <h3>Sistema</h3>
  <p>Funzioni avanzate per la gestione del sistema.</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
    class="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
    <path fill-rule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
  </svg>
</a><a href="interfaccia_doc.php" class="menu__item">
  <h3>Interfaccia</h3>
  <p>Permette di scambiare documenti con altre aziende che usano Dittaweb.</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
    class="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
    <path fill-rule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
  </svg>
</a><a href="vendite_web.php" class="menu__item">
  <h3>Vendite web</h3>
  <p>Gestione delle vendite web online tramite sito pubblico.</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
    class="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
    <path fill-rule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
  </svg>
</a><a href="utilita.php" class="menu__item">
  <h3>Utilità</h3>
  <p>Funzioni utili di sistema (cambio parola chiave...).</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
    class="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
    <path fill-rule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
  </svg>
</a><a href="docs/primipassidw.pdf" class="menu__item">
  <h3>Primi passi</h3>
  <p>Una mini guida in formato PDF per iniziare ad utilizzare Dittaweb.</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
    class="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
    <path fill-rule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z">
    </path>
  </svg>
</a>
</div>
  `;
}
function createLogin() {
  return `
    <div class="login">
      <form class="login__form">
        <h1>Dittaweb<span>Servizio di Gestione Aziendale via Web</span></h1>
        <div class="form__group">
          <label for="email">Codice azienda</label>
          <input type="text" id="azienda" name="azienda" required>
        </div>
        <div class="form__group">
          <label for="email">Codice utente</label>
          <input type="text" id="user" name="user" required>
        </div>
        <div class="form__group">
          <div>
            <label for="password">Parola chiave</label>
            <input type="password" id="password" name="password" required>
          </div>
          <div>
            <input type="checkbox" id="show-password" onclick="togglePasswordVisibility()">
            <label for="show-password"><small>Mostrar senha</small></label>
          </div>
        </div>
        <a href="javascript:document.loginform.submit()" id="btn-submit">Entra</a>
      </form>
    </div>
  `;
}
// Exemplo de uso: 
const menuHtml = createMenu();
const loginHtml = createLogin();

// Função para atualizar o conteúdo da página com base na URL
function updateContent() {
  const hash = window.location.hash;
  let content = document.getElementById('content');

  if (hash === '') {
    content.innerHTML = menuHtml;
  } else if (hash === '#/login') {
    content.innerHTML = loginHtml;
  } else if (hash === '#/contact') {
    content.innerHTML = '<h2>Contato</h2>';
  } else {
    content.innerHTML = '<h2>Página não encontrada</h2>';
  }
}

// Evento hashchange para atualizar o conteúdo quando a URL mudar
window.addEventListener('hashchange', updateContent);

// Atualize o conteúdo da página com base na URL atual
updateContent();

