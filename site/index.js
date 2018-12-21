function check() {
  var form_Ok = true;

  const campos = ["Nome", "E-mail", "Telefone", "Serviço", "Mensagem"];

  for (var i = 0; i < campos.length; i++) {
    if (document.getElementById(campos[i]).value == "") {
      document.getElementById(campos[i]).className += " red-border";
      form_Ok = false;
    } else {
      document.getElementById(campos[i]).classList.remove("red-border");
      document.getElementById(campos[i]).className += " green-border";
      form_Ok = true;
    }
  }

  if (form_Ok === true) {
    document.getElementById("sucesso").style.display = "block";
    document.getElementById("formulario").style.display = "none";
  }
}
