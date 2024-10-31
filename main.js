const urlAdviceApi = "https://api.adviceslip.com/advice"

fetch(urlAdviceApi)
.then(response => {
  if(response.status === 200) {
        return response.json();;

  }
})
.then(data => {
    console.log(data);

    const { slip: { advice } } = data
    console.log(advice)

    let btn = document.querySelector('.btn')
    let card_p = document.querySelector('.card-p')
    btn.addEventListener('click', () => {
      location.reload()

    })
    card_p.innerHTML = advice

  })