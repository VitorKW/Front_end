import './App.css'
import AtividadeComponent from './components/AtividadeComponent'

function App() {
  const products = [
    {id: 1, name: 'Feijão kg', preco: 'R$12,00', estoque: 30  },
    {id: 2, name: 'Tomate kg', preco: 'R$4,00', estoque: 10  },
    {id: 3, name: 'Cebola kg', preco: 'R$8,00', estoque: 15  },
    {id: 4, name: 'Carne kg', preco: 'R$40,00', estoque: 2  }

  ]
return(
  <div>
    <AtividadeComponent products = {products}/>
  </div>
)
}

export default App
