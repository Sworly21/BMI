function szamol(){
    let magassag = parseFloat(document.getElementById('magassag').value);
    let suly = parseFloat(document.getElementById('suly').value);

    document.getElementById('BMIertek').textContent = Math.round(suly / (magassag / 100)**2);

    if(BMIertek <= 18.5 ){
        document.getElementById('sovany').style.backgroundColor = 'orange';
    }

}















