//gauge = 4 in by 4 in

document.getElementById('toDesired').onsubmit = calculateFinalWL


function calculateFinalWL(event){
    event.preventDefault();
    
    let rowsToAchieveWidth = document.getElementById('gaugeWid');
    let rowstoAchiceLength = document.getElementById('gaugeLen');

    let currentLength = document.getElementById('currentLen');
    let desiredLength = document.getElementById('desiredLen');
    let numOfRows = (Num(currentLength)*Num(rowstoAchiceLength))/4;
    let finalNumOfRows = (Num(desiredLength)*Num(rowstoAchiceLength))/4;

    let rowsToDesiredLength = finalNumOfRows - numOfRows;
    console.log(rowsToDesiredLength);
    document.getElementById('rowsLeft').value = rowsToDesiredLength;
    //let finalWidth = 
}