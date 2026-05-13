// packages/ui/SharedCard.jsx

export const SharedCard = ({ type, data }) => {
  // Lógica Booleana para definir o comportamento
  const isGastronomy = type === 'BAR';
  const isUtility = type === 'SERVICE';

  return (
    <div className={`card ${isGastronomy ? 'border-orange-500' : 'border-blue-500'}`}>
      <h1>{data.title}</h1>
      
      {isGastronomy && <button>Ver Cardápio</button>}
      {isUtility && <button>Contratar Agora</button>}
      
      <p>Local: Botafogo/Humaitá</p>
    </div>
  );
};