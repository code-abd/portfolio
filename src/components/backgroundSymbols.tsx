'use client';

const BackgroundSymbols = () => {
  const fixedSymbols = [
    { symbol: '#', top: '10%', left: '15%', size: '6rem', opacity: '0.25' },
    { symbol: '</>', top: '20%', left: '75%', size: '8rem', opacity: '0.35' },
    { symbol: ';', top: '60%', left: '10%', size: '5rem', opacity: '0.5' },
    { symbol: ':', top: '70%', left: '80%', size: '7rem', opacity: '0.1' },
    { symbol: '(', top: '40%', left: '65%', size: '6rem', opacity: '0.2' },
    { symbol: ')', top: '40%', left: '20%', size: '6rem', opacity: '0.2' },

    // New symbols
    { symbol: '{', top: '15%', left: '50%', size: '4rem', opacity: '0.3' },
    { symbol: '}', top: '16%', left: '55%', size: '4rem', opacity: '0.3' },
    { symbol: '=>', top: '30%', left: '30%', size: '5rem', opacity: '0.25' },
    { symbol: 'def', top: '50%', left: '75%', size: '4.5rem', opacity: '0.3' },
    { symbol: 'end', top: '55%', left: '78%', size: '4.5rem', opacity: '0.3' },
    { symbol: 'puts', top: '25%', left: '10%', size: '3.5rem', opacity: '0.3' },
    { symbol: '@user', top: '65%', left: '50%', size: '4rem', opacity: '0.2' },
    { symbol: 'render', top: '35%', left: '5%', size: '4rem', opacity: '0.2' },
    { symbol: 'params[:id]', top: '75%', left: '60%', size: '3.5rem', opacity: '0.2' },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {fixedSymbols.map((item, index) => (
        <span
          key={index}
          className="absolute text-gray-400 select-none whitespace-nowrap"
          style={{
            top: item.top,
            left: item.left,
            fontSize: item.size,
            opacity: parseFloat(item.opacity),
            fontWeight: 700,
          }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  );
};

export default BackgroundSymbols;
