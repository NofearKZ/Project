const petro = document.getElementById('Petro')
const newyork = document.getElementById('New York')
const moscow = document.getElementById('Moscow')
const tokyo = document.getElementById('Tokyo')
const krym = document.getElementById('Krym')

async function Api() {
    const respons_petro = await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current=temperature_2m&hourly=temperature_2m')
    const respons_newyork = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&current=temperature_2m&hourly=temperature_2m')
    const respons_moscow = await fetch('https://api.open-meteo.com/v1/forecast?latitude=55.7522&longitude=37.6156&current=temperature_2m&hourly=temperature_2m') 
    const respons_tokyo = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m&hourly=temperature_2m')
    const respons_krym = await fetch('https://api.open-meteo.com/v1/forecast?latitude=47.3002&longitude=39.5164&current=temperature_2m&hourly=temperature_2m') 
    const data_petro = await respons_petro.json()
    const data_newyork = await respons_newyork.json()
    const data_moscow = await respons_moscow.json()
    const data_tokyo = await respons_tokyo.json()
    const data_krym = await respons_krym.json()
    return[data_petro, data_newyork, data_moscow, data_tokyo, data_krym] 
}

async function output() {
    try {
        let out = await Api()
        console.log(out)
        petro.textContent = `Air Temperature: ${out[0].current.temperature_2m} \u00B0C` 
        newyork.textContent = `Air Temperature: ${out[2].current.temperature_2m} \u00B0C`
        moscow.textContent = `Air Temperature: ${out[1].current.temperature_2m} \u00B0C`
        tokyo.textContent = `Air Temperature: ${out[3].current.temperature_2m} \u00B0C`
        krym.textContent = `Air Temperature: ${out[4].current.temperature_2m} \u00B0C`

    }
    catch(error) {
        console.log(error)
    }
    finally {
        setTimeout(output, 10000)
    }
}
output ()
