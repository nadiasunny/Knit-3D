//gauge = 4 in by 4 in

document.getElementById('toDesired').onsubmit = calculateFinalWL


function calculateFinalWL(event){
    event.preventDefault();
    
    let rowsToAchieveWidth = Number(document.getElementById('gaugeWid').value);
    let rowstoAchiceLength = Number(document.getElementById('gaugeLen').value);

    let currentLength = Number(document.getElementById('currentLen').value);
    let desiredLength = Number(document.getElementById('desiredLen').value);
    let numOfRows = ((currentLength)*(rowstoAchiceLength))/4;
    let finalNumOfRows = ((desiredLength)*(rowstoAchiceLength))/4;

    let rowsToDesiredLength = finalNumOfRows - numOfRows;
    console.log(rowsToDesiredLength);
    document.getElementById('rowsLeft').innerHTML = rowsToDesiredLength;
    //let finalWidth = 
}