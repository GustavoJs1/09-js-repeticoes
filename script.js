function tabuada(){
    let num = document.getElementById("txtn");
    let tab = document.getElementById("seltab");
    if(num.value.lenght == 0){
        window.alert("Por favor digite um numero !");
    }
    else{
        let n = Number(num.value);
        let c = 1
        tab.innerHTML = "";
        while( c <=  10){
            let item = document.createElement("option");
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`
            tab.appendChild(item);
            c++
        }
    }
}
function Contar(){
    let ini = document.getElementById("txti");
    let fim = document.getElementById("txtf");
    let passo = document.getElementById("txtp");
    let res = document.getElementById("res");

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = "Impossível contar";
        window.alert('[ERRO] Impossível contar')
    }
    else{
        res.innerHTML = "Contando... <br>";
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(p <= 0){
            window.alert('Passo invalido ! Considerando PASSO 1');
            p = 1;
        }
        else if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        else{
            
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }

}