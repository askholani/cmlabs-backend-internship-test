// Buat loop yang mencetak angka 1-100,
// JIKA kelipatan 3 maka outputnya "Fizz" ,
// JIKA kelipatan 5 outputnya "Buzz" dan
// JIKA kelipatan 3 dan 5 keluarkan 'FizzBuzz'

const div = document.querySelector('.fizzbuzz')

for (let i = 1; i <= 100; i++) {
  const span = document.createElement('span')

  switch (true) {
    case i % (5 * 3) === 0:
      span.textContent = 'FizzBuzz'
      console.log('FizzBuzz')
      break
    case i % 3 === 0:
      span.textContent = 'Fizz'
      console.log('Fizz')
      break
    case i % 5 === 0:
      span.textContent = 'Buzz'
      console.log('Buzz')
      break
    default:
      span.textContent = i
      console.log(i)
  }
  div.appendChild(span)
}
