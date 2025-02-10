class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_sZGf2jndPJqdacga7wq0y80zBds9EBTAwOGyuhBE&base_currency=";
    }

    async exchange(amount, firstCurrency, secondCurrency){
        // fetch işlemi
        const response = await fetch(`${this.url}${firstCurrency}`);
        const result = await response.json();
        const exchangedResult = amount * result.data[secondCurrency];

        return exchangedResult;
    }
}