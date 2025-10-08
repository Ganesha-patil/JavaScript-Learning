function checkEmptyFields() {
  const input = document.getElementById("input_text").value;
  if (input === "") {
    document.getElementById("input_text").focus();
    alert("Enter input first");
    return false;
  }
  return true;
}

function stringOperation(type) {
  const inputElement = document.getElementById("input_text");
  const outputElement = document.getElementById("output_text");
  let input = inputElement.value;
  let output = "";

  // Only proceed if input is not empty (except for length check)
  if (type !== 'length' && type !== 'trim' && type !== 'trimStart' && type !== 'trimEnd') {
    if (!checkEmptyFields()) return;
  }

  switch (type) {
    case 'upper':
      output = input.toUpperCase();
      break;
    case 'lower':
      output = input.toLowerCase();
      break;
    case 'reverse':
      output = input.split("").reverse().join("");
      break;
    case 'length':
      output = "Total length = " + input.length;
      break;
    case 'trim':
      output = input.trim();
      break;
    case 'trimStart':
      output = input.trimStart();
      break;
    case 'trimEnd':
      output = input.trimEnd();
      break;
    case 'replace':
      const old_text = prompt("Enter old text");
      const new_text = prompt("Enter new text");
      if (old_text !== null && new_text !== null) {
        output = input.replaceAll(old_text, new_text);
      } else {
        output = input;
      }
      break;
      case 'substring':
        const substr = prompt("enter string you want to find")
        if(input.substring(substr))
        {
           output = "yes it contains substring"
        }
        else
        {
          output = "it dosent contains substring"
        }
        break;
    default:
      alert("Invalid operation");
      return;
  }

  outputElement.value = output;

  const audio = document.getElementById("audio");
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

function clearFields() {
  document.getElementById("input_text").value = "";
  document.getElementById("output_text").value = "";
  document.getElementById("input_text").focus();

  const audio = document.getElementById("audio");
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}




















// different topic for my use
const images = [
  "/images/laptop&buildFrame.jpg",
  "/images/sofaHall.jpg",
  "/images/lakeMount.jpg",
  "/images/SnowMountain.jpg"
];

let index = 0;

function showImg() {
  image = document.getElementById("image");
  image.setAttribute("src", images[index]);
  //image.src = images[index];
  console.log(image, " ", image.src, " ", images[index])
}
function nextImg() {
  index = (index + 1) % images.length; // 0 + 1 % 4 = 1%4
  showImg();
  /*index = (1 + 1) % 4
          = 2 */
}
function prevImg() {
  index = (index - 1 + images.length) % images.length;
  showImg();
  /*index = (3 - 1 + 4) % 4
       = 6 % 4
       = 2 */
}

