const puppeteer = require('puppeteer');

console.log('inicia proceso');


(async () => {
    const browser = await puppeteer.launch(
        {headless:false},
        );
        
    const URL ='https://articulo.mercadolibre.com.ec/MEC-431662405-silla-gamer-reclinable-marvo-ch-104-ergonomica-incluye-iva-_JM#position=1&search_layout=stack&type=item&tracking_id=68b95946-0786-470a-9e9b-409d55e8fffd'

    const page = await browser.newPage();
    await page.goto(URL);
    console.log('cerramos navegador...');

    var titulo1 = await page.evaluate(()=>{
        //esto saldra en conloda del browser
        const h1 = document.querySelector('h1.ui-pdp-title')
        console.log('Saca H1')
        console.log(h1.innerHTML)
        return h1.innerHTML
    })
    
    console.log(titulo1)
    //browser.close();
    console.log('navegador cerrado');
  })();