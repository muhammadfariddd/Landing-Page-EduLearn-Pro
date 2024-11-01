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

// GSAP Animation
gsap.registerPlugin(TextPlugin);
gsap.to("#hero h1", {
  duration: 2,
  delay: 1,
  repeat: -1,
  text: "Welcome to EduLearn Pro",
});
gsap.from("nav", { duration: 2, y: "-100%", opacity: 0, ease: "bounce" });
gsap.from("#hero h5", {
  duration: 1,
  x: -50,
  opacity: 0,
  delay: 1.5,
  ease: "power2.out",
});
