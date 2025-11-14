function cercaEmail() {
    const lista = document.getElementById("email-list");
    const items = lista.querySelectorAll("li");

    for (let i = 0; i < items.length; i++) {
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(function (resp) {
                const mail = resp.data.response;
                items[i].textContent = mail;
            });
    }
}

cercaEmail();