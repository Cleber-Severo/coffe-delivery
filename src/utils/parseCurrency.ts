  export const parseCurrency = (value: string): string | 0 =>
    isNaN(parseFloat(value))
      ? 0
      : parseFloat(parseFloat(value).toFixed(2)).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });