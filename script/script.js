fetch(`https://swapi.tech/api/films`)
 .then((res) => {
  return res.json()
  })
  .then(data => {
    console.log(data)

    const title1 = document.getElementById("lit1")
    const title2 = document.getElementById("lit2")
    const title3 = document.getElementById("lit3")
    const title4 = document.getElementById("lit4")
    const title5 = document.getElementById("lit5")
    const title6 = document.getElementById("lit6")
    title1.innerHTML =`film name: ${data.result[0].properties.title}`
    title2.innerHTML =`film name: ${data.result[1].properties.title}`
    title3.innerHTML =`film name: ${data.result[2].properties.title}`
    title4.innerHTML =`film name: ${data.result[3].properties.title}`
    title5.innerHTML =`film name: ${data.result[4].properties.title}`
    title6.innerHTML =`film name: ${data.result[5].properties.title}`
  });
