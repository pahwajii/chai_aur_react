import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyoptions=[],
    selectCurrency="usd",
    amountdisable = false,
    currencydisable = false,
    
    className = "",
}) {
   const amountInputId = useId();//key generate nhi hogi  isse

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    //notes.txt
                    id = {amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountdisable}
                    value = {amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencydisable}
                    
                >
                        {currencyoptions.map((currency)=>(
                          <option key={currency} value={currency}>
                            {currency}
                        </option>
                        ))}
                        {/* // jab bhi aap loop lagayenge jsx ke andar to aapko ek key paaas karni padegi vrna react ek hi element banaata reh jayega upar wale case me jese fass sakta hai isliye key banayi gayi 
                        isse performance badegi 
                        remember the key in loops */}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

