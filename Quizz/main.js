let usuarios = [];

const Usuarios = (User) => {
  const Usuarios = document.getElementById('Usuario');
  Usuarios.innerHTML = '';

  User.forEach((Usuario) => {
    const id = document.createElement('h2');
    const firstname = document.createElement('h3');
    const lastname = document.createElement('h3');
    const UserAccount = document.createElement('h4'); 
    const Email = document.createElement('p');
    const Descripcion = document.createElement('p');

    id.textContent = `id: ${Usuario.id}`;
    firstname.textContent = `firstname: ${Usuario.firstname}`;
    lastname.textContent = `lastname: $ ${Usuario.lastname}`;
    UserAccount.textContent = `UserAccount: $ ${Usuario.UserAccount}`;
    Email.textContent = `Email ${Usuario.Email}`;
    Descripcion.textContent = `Descripcion ${Usuario.Descripcion}`;

  });
}

