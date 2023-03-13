module.exports = class Validations {
  static passwordValidation(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

    if (password.length === 0) {
      return "border-black";
    }
    if (password.length < 7) {
      return "border-red-500";
    } else if (!password.match(passwordRegex)) {
      return "border-yellow-500";
    } else return "border-green-500";
  }
  static uploadImageValidation(event, setImageSrc) {
    const file = event.target.files[0];
    // Check if file is an image
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only JPEG, PNG, and GIF images are allowed.");
      event.target.value = null; // clear the input field

      setImageSrc(null);
      return null;
    }

    // Check if file is less than 5MB
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      alert("File size must be less than 5MB.");
      event.target.value = null; // clear the input
      setImageSrc(null);

      return null;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    return file;
  }
};
