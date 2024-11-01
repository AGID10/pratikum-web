function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    if (name === "" || email === "" || address === "") {
        alert("Semua data harus diisi.");
        return false;
    }

    alert("Form berhasil diisi.");
    return true;
}
