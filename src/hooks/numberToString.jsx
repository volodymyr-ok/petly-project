export function numberToWord(number) {
    let age 
    if(number !== null || number !== undefined){
        const start = Date.now() - new Date(number)
        const toConwertToYear = 31536009219.356606
        age = Math.round(start/toConwertToYear)
    }
    const words = [
      'Zero', 'One', 'Two', 'Three', 'Four', 'Five',
      'Six', 'Seven', 'Eight', 'Nine', 'Ten',
      'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
      'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];
  
    const tens = [
      '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty',
      'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];
  
    if (age < 20) {
      return `${words[age]} years`;
    }
  
    if (age < 100) {
      return` ${tens[Math.floor(age / 10)] +
      (age % 10 !== 0 ? '-' + words[age % 10].toLowerCase() : '')} years`;
    }
}