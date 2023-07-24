const showData = () => {
  let hg_range = parseFloat(document.getElementById("hg_range").value);
  let cbc_range = parseFloat(document.getElementById("cbc_range").value);
  let sugar_range = parseFloat(document.getElementById("sugar_range").value);
  let rbc_range = parseFloat(document.getElementById("rbc_range").value);
  let ldl_range = parseFloat(document.getElementById("ldl_range").value);

  let hg = document.getElementById("hg");
  let cbc = document.getElementById("cbc");
  let sugar = document.getElementById("sugar");
  let rbc = document.getElementById("rbc");
  let ldl = document.getElementById("ldl");

  let hg_report = document.getElementById("hg_report");
  let cbc_report = document.getElementById("cbc_report");
  let sugar_report = document.getElementById("sugar_report");
  let rbc_report = document.getElementById("rbc_report");
  let ldl_report = document.getElementById("ldl_report");

  let btn = document.getElementById("btn");
  btn.style.display = "none";

  let btn1 = document.getElementById("btn1");
  btn1.style.display = "inline";

  let btn2 = document.getElementById("btn2");
  btn2.style.display = "inline";

  if (hg_range >= 4 && hg_range <= 11) {
    hg_report.value = "Normal";
    hg.style.backgroundColor = "green";
  } else {
    hg_report.value = "Abnormal";
    hg.style.backgroundColor = "red";
  }
  if (cbc_range >= 4.4 && cbc_range <= 6) {
    cbc_report.value = "Normal";
    cbc.style.backgroundColor = "green";
  } else {
    cbc_report.value = "Abnormal";
    cbc.style.backgroundColor = "red";
  }
  if (sugar_range >= 100 && sugar_range <= 125) {
    sugar_report.value = "Normal";
    sugar.style.backgroundColor = "green";
  } else {
    sugar_report.value = "Abnormal";
    sugar.style.backgroundColor = "red";
  }
  if (rbc_range >= 13.5 && rbc_range <= 28) {
    rbc_report.value = "Normal";
    rbc.style.backgroundColor = "green";
  } else {
    rbc_report.value = "Abnormal";
    rbc.style.backgroundColor = "red";
  }
  if (ldl_range >= 130 && ldl_range <= 159) {
    ldl_report.value = "Normal";
    ldl.style.backgroundColor = "green";
  } else {
    ldl_report.value = "Abnormal";
    ldl.style.backgroundColor = "red";
  }
};

const showMessage = () => {
  alert("Your report has been successfully submitted to your Concerned Doctor");

  // Remove CSS styles and reset input field values
  let elements = ["hg", "cbc", "sugar", "rbc", "ldl"];
  for (let elementId of elements) {
    let element = document.getElementById(elementId);
    element.style.backgroundColor = "";
  }

  let reports = [
    "hg_report",
    "cbc_report",
    "sugar_report",
    "rbc_report",
    "ldl_report",
  ];
  for (let reportId of reports) {
    let report = document.getElementById(reportId);
    report.value = "";
  }

  // // Clear input field values
  let inputFields = [
    "hg_range",
    "cbc_range",
    "sugar_range",
    "rbc_range",
    "ldl_range",
    "name",
    "age",
    "address",
    "phone",
    "email",
  ];
  for (let inputId of inputFields) {
    let input = document.getElementById(inputId);
    input.value = "";
  }

  // // Reset button display
  let btn = document.getElementById("btn");
  btn.style.display = "inline";

  let btn1 = document.getElementById("btn1");
  btn1.style.display = "none";

  let btn2 = document.getElementById("btn2");
  btn2.style.display = "none";
};

const showPrev = () => {
  let btn = document.getElementById("btn");
  btn.style.display = "inline";

  let btn1 = document.getElementById("btn1");
  btn1.style.display = "none";

  let btn2 = document.getElementById("btn2");
  btn2.style.display = "none";
};
