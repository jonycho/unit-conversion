/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const btn = document.getElementById("button-submit")

const lengthEl = document.getElementById("result-length")
const volumeEl = document.getElementById("result-volume")
const massEl = document.getElementById("result-mass")
const container = document.getElementById("principal")

function conversionMetricImperial(unit, metric, imperial, base){
    let metricConverse = unit *base
    let imperialConverse = unit / base
    
    const stringConverse = `${unit} ${metric} = ${metricConverse.toFixed(3)} ${imperial} | 
    ${unit} ${imperial} = ${imperialConverse.toFixed(3)} ${metric}`
    
    return stringConverse
}


btn.addEventListener("click",function(){
    const unit = document.getElementById("unit-input")
    
    lengthEl.innerHTML=conversionMetricImperial(unit.value, "meters","feet", 3.28084)    
    volumeEl.innerHTML=conversionMetricImperial(unit.value, "liters","gallons", 0.264172)    
    massEl.innerHTML=conversionMetricImperial(unit.value, "kilos","pounds", 2.20462)    
    
    
})

const toggle = document.getElementById('toggle');

toggle.addEventListener('input', (e) => {
  const isChecked = e.target.checked;
  
  if(isChecked) {
    container.classList.add('dark-theme');
  } else {
    container.classList.remove('dark-theme');
  }
});