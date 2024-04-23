
function IntroComponent(){
    const a = 5, b = 2, nome = 'Vitor';
    const aluno = {
        nome: 'João',
        email: 'joão@email.com'
    }
    return (
        <div>
            <h2>Componente de Introdução</h2>
            <h3>Template Expressions</h3>
            <p>{nome}, o produto entre {a} e {b} é {a * b}</p>
            <p>Aluno {aluno.nome} <br /> E-mail: {aluno.email}</p>
        </div>
    )
}

import {useState} from 'react'
function MyButtonComponent() {
    const[counter, setCounter] = useState(0);

    const addCounterOnClick = () => setCounter (counter + 1)
    return (
        <button onClick={addCounterOnClick}>
            Clicou {counter} vezes
        </button>
    )
}

export default MyButtonComponent