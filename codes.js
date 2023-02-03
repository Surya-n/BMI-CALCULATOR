let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('heighterror').innerHTML = 'Enter a valid height';
    }else{
        document.getElementById('heighterror').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weighterror').innerHTML = 'Enter a valid weight';
    }else{
        document.getElementById('weighterror').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = ' Under weight: ' + bmi + ', eat healthy!';
        }else if(bmi >= 18.6 && bmi < 24.99){
            result.innerHTML = 'Normal : ' + bmi + ', stay healthy!';
        }else if(bmi >= 25 && bmi < 29.99){
            result.innerHTML = 'Over weight : ' + bmi + ', eat healthy!';
        }
        else{ result.innerHTML = 'obese : ' + bmi+ ', eat healthy!'}
    }else{
        alert(' errors identified');
        result.innerHTML = '';
    }
});