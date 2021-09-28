function enviarScript(scriptText){
    const lines = scriptText.split("\n"); 

    let i = 0;       

    setInterval(() => { 
        if(i >= lines.length) return

        if(lines[i].trim() != ''){ 
            console.log(lines[i]); 
    
            window.InputEvent = window.Event || window.InputEvent;
    
            const event = new InputEvent('input', { bubbles: true });
    
            const textbox = document.querySelector('#main div._13NKt');
    
            textbox.textContent = lines[i];
    
            textbox.dispatchEvent(event);
    
            document.querySelector("#main span[data-testid=send]").click();                   

        }
        i++;
    }, 250)
}

enviarScript(`SHREK

Written by

William Steig & Ted Elliott




No baile nóis é mídia
No baile os menor marola
Aperta o balão
Acende, puxa, prende e solta

Numa mão tá o copão
Com whisky e Red Bull
Na outra o lança perfume
Encomendei mais um

Com o tênis de mil
Joguei o boné pra trás
Não sei se hoje eu vou de Lacoste
Armani Oakley ou Calvin Klein

As pirinha me olhando piscando a buceta
Eu tranzudão, naquele pique, arrastei pra treta
Comi a bunda dela, taquei sem compromisso
Por onde o poze passa nunca é esquecido
Por onde o poze passa nunca é esquecido

Comi a xota dela, taquei sem compromisso
Por onde o poze passa nunca é esquecido
Por onde o poze passa nunca é esquecido

No baile nóis é mídia
No baile os menor marola
Aperta o balão
Acende, puxa, prende e solta

Numa mão tá o copão
Com whisky e Red Bull
Na outra o lança perfume
Encomendei mais um

Com o tênis de mil
Joguei o boné pra trás
Não sei se hoje eu vou de Lacoste
Armani Oakley ou Calvin Klein

As pirinha me olhando piscando a buceta
Eu tranzudão, naquele pique, arrastei pra treta
Comi a bunda dela, taquei sem compromisso
Por onde o poze passa nunca é esquecido
Por onde o poze passa nunca é esquecido

Comi a xota dela, taquei sem compromisso
Por onde o Poze passa nunca é esquecido
Por onde o Poze passa nunca é esquecido
