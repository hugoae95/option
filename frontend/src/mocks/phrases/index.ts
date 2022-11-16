export const phrases = [
    "<p>Las palabras amables pueden ser cortas y fáciles de decir, pero sus ecos son realmente infinitos.</p><p>- Madre Teresa de Calcuta.</p>",
    "<p>Según la FAO, el 8.9% de la población mundial padece hambre tras la pandemia.</p>",
    "<p>La medida de lo que somos, es lo que hacemos con lo que tenemos.</p><p>- Vince Lombardi.</p>",
    "<p>Las cosas no se dicen, se hacen, porque al hacerlas se dicen solas.</p><p>- Woody Allen.</p>",
    "<p>Según las proyecciones de Naciones Unidas, para 2050 podría haber más plástico que peces en los océanos.</p>",
    "<p>Lo que estamos haciendo a los bosques del mundo, no es sino un reflejo de lo que estamos haciendo a nosotros mismos los unos a los otros.</p><p>- Mahatma Gandhi.</p>",
];

export const randomPhrases = () => {
    return phrases[Math.floor(Math.random()*phrases.length)];
}