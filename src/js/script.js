function showAlert() {
  event.preventDefault();

  var input = document.querySelectorAll("input[required], select[required]");
  var allInput = true;

  input.forEach(function (input) {
    if (!input.value) {
      allInput = false;
    }
  });

  if (allInput) {
    Swal.fire({
      title: "Registration Successful!",
      text: "You havae successfully registered",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "index.html";
      }
    });
  }
}
