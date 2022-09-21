function szamol(){
    let magassag = parseFloat(document.getElementById('magassag').value);
    let suly = parseFloat(document.getElementById('suly').value);

    
   let BMIertek = document.getElementById('BMIertek').textContent = Math.round(suly / (magassag / 100)**2);

    document.getElementById('sovany').style.backgroundColor = 'transparent';
    document.getElementById('normal').style.backgroundColor = 'transparent';
    document.getElementById('tulsuly').style.backgroundColor = 'transparent';
    document.getElementById('1tulsuly').style.backgroundColor = 'transparent';
    document.getElementById('2tulsuly').style.backgroundColor = 'transparent';
    document.getElementById('3tulsuly').style.backgroundColor = 'transparent';
    
    if(BMIertek < 18.5 ){
        document.getElementById('sovany').style.backgroundColor = 'orange';
    }else if(BMIertek >= 18.5 && BMIertek <= 24.9){
        document.getElementById('normal').style.backgroundColor = 'orange';
    }else if(BMIertek >= 25 && BMIertek <= 29.9){
        document.getElementById('tulsuly').style.backgroundColor = 'orange';
    }else if(BMIertek >= 30 && BMIertek <= 34.9){
        document.getElementById('1tulsuly').style.backgroundColor = 'orange';
    }else if(BMIertek >= 35 && BMIertek <= 39.9){
        document.getElementById('2tulsuly').style.backgroundColor = 'orange';
    }else{
        document.getElementById('3tulsuly').style.backgroundColor = 'orange';
    }

}















