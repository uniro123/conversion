function showCalculator() {
    document.getElementById("calculator").style.display = "block";
    document.getElementById("conversion").style.display = "none";
}

function showConversion() {
    document.getElementById("calculator").style.display = "none";
    document.getElementById("conversion").style.display = "block";
}


function signOut() {
    var confirmSignOut = confirm("Are you sure you want to sign out?");
    
    if (confirmSignOut) {
        window.open("index.html");
        window.close("conversion.html")
    }
}


function convertPlease() {
          var fromBase = document.getElementById("fromBase").value;
          var toBase = document.getElementById("toBase").value;
          var numberToConvert = document.getElementById("numberToConvert").value;
          
          if (fromBase === "binary" && !/^[01]+$/.test(numberToConvert)) {
      document.getElementById("conversionResult").value = "Invalid binary input. Please enter only 0s and 1s.";
      return;
  }
         

          var result = convertBase(fromBase, toBase, numberToConvert);
          document.getElementById("conversionResult").value = result;
          
          
      }

      function convertBase(fromBase, toBase, number) {
          if (fromBase === toBase) {
              return number;
              // No conversion needed
          }

          var inputNumber;

          
          switch (fromBase) {
              case "binary":
                  inputNumber = parseInt(number, 2);
                  break;
              case "decimal":
                  inputNumber = parseInt(number, 10);
                  break;
              case "octal":
                  inputNumber = parseInt(number, 8);
                  break;
              case "hexadecimal":
                  inputNumber = parseInt(number, 16);
                  break;
              default:
                  return "Invalid From Base";
          }

          
          switch (toBase) {
              case "binary":
                  return inputNumber.toString(2);
              case "decimal":
                  return inputNumber.toString(10);
              case "octal":
                  return inputNumber.toString(8);
              case "hexadecimal":
                  return inputNumber.toString(16).toUpperCase();
              default:
                  return "Invalid To Base";
          }
      }

      function resetFields() {
          document.getElementById("fromBase").selectedIndex = 0;
          document.getElementById("toBase").selectedIndex = 1;
          document.getElementById("numberToConvert").value = "";
          document.getElementById("conversionResult").value = "";
      }

      function swapBases() {
          var fromBase = document.getElementById("fromBase").selectedIndex;
          var toBase = document.getElementById("toBase").selectedIndex;
          
          document.getElementById("fromBase").selectedIndex = toBase;
          document.getElementById("toBase").selectedIndex = fromBase;
         
}

let inputnum = document.getElementById("inputnum");

function numberInput(value) {
    inputnum.value += value;
}

function squaredInput() {
    inputnum.value.innerHTML = "^";
    
}

function deleteInput() {
    inputnum.value = inputnum.value.slice(1)
}

function clearInput() {
    inputnum.value = "";
}

function changeInput() {
    if(inputnum.value.startsWith("-")) {
        inputnum.value = inputnum.value.slice(1);
    }
    
    else {
        inputnum.value = "-" + inputnum.value;
    }
}

function theResult() {
    try {
        inputnum.value = eval(inputnum.value);
    }
    catch (error) {
        inputnum.value = "Error";
    }
}