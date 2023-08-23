$(document).ready(function() {
  const passwordInput = $('#password');
  const showPasswordCheckbox = $('#show-password');

  showPasswordCheckbox.on('change', function() {
    if ($(this).prop('checked')) {
      passwordInput.attr('type', 'text'); // Mostra a senha
    } else {
      passwordInput.attr('type', 'password'); // Esconde a senha
    }
  });

  passwordInput.on('input', function() {
    if ($(this).val() === '') {
      showPasswordCheckbox.prop('disabled', true);
    } else {
      showPasswordCheckbox.prop('disabled', false);
    }
  });

  // Disabilite o checkbox inicialmente se o campo de senha estiver vazio
  if (passwordInput.val() === '') {
    showPasswordCheckbox.prop('disabled', true);
  }
});

