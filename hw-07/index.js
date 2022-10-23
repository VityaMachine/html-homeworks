const form = document.getElementById("form");

const formHandler = (e) => {
  e.preventDefault();

  const inputsData = {
    name: form.name.value,
    email: form.email.value,
    tel: form.tel.value,
    password: "Hello World :)",
    location: form.location.value,
  };

  const { name, email, tel, password, location } = inputsData;

  alert(
    `User ${name} with email: ${email} and tel: ${tel} from ${location} successfuly registered!!`
  );
};

form.addEventListener("submit", formHandler);
