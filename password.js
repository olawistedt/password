
let LENGTH = 15
let password = ''
let lower_letters = 'abcdefghijklmnopqrstuvxyz' // Do not include l.
let upper_letters = 'ABCDEFGHIJKLMNPQRSTUVXYZ' // Do not include O.
let digits = '0123456789'
let symbols = '!#¤%&/()=?*><-:;,._|@£$€{[]}'
let ok = false

function is_legal_password(password) {
  nr_of_digits = 0
  nr_of_symbols = 0
  nr_of_upper_letters = 0

  for (let i = 0; i < LENGTH; i++) {
    if (symbols.includes(password[i])) {
      nr_of_symbols += 1
    } else if (digits.includes(password[i])) {
      nr_of_digits += 1
    } else if (upper_letters.includes(password[i])) {
      nr_of_upper_letters += 1
    }
  }

  if (nr_of_symbols == 2 && nr_of_digits == 2 && nr_of_upper_letters == 1) {
    return true
  }

  return false;
}

function generate_password() {
  while (!ok) {
    password = ''
    for (let i = 0; i < LENGTH; i++) {
      let type = Math.floor(Math.random() * 100)
      if (type < 60) {
        // A lowercase letter
        let pos = Math.floor(Math.random() * lower_letters.length)
        password += lower_letters[pos]
      } else if (type < 80) {
        let pos = Math.floor(Math.random() * digits.length)
        password += digits[pos]
      } else if (type < 90) {
        let pos = Math.floor(Math.random() * symbols.length)
        password += symbols[pos]
      } else {
        let pos = Math.floor(Math.random() * upper_letters.length)
        password += upper_letters[pos]
      }
    }
    if (is_legal_password(password)) {
      ok = true
    }
  }
  return password
}

document.addEventListener('DOMContentLoaded', function () {
  const h1Element = document.querySelector('h1');
  h1Element.textContent = generate_password();
});

console.log(generate_password())


