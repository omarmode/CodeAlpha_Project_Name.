function yourdate() {
  let age1string = document.getElementById("age1").value;
  let age = new Date(age1string);
  let today = new Date();
  let fullage1 = today.getFullYear() - age.getFullYear();
  let monthToday = today.getMonth();
  let agemoth = age.getMonth();
  if (
    monthToday < agemoth ||
    (monthToday === agemoth && today.getDate() < age.getDate())
  ) {
    fullage1--;
  }
  let result = document.getElementById("result");
  result.textContent = `your age ${fullage1}`;
}
