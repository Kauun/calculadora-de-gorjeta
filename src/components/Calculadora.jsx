import './Calculadora.css'

export function Calculadora(){
    return(
        <main>
            <form action="">
               
                 <div className="bill">
                     <label htmlFor="bill">Conta</label>
                     <div className="input-box">
                         <input type="number" id="bill" placeholder="0" />
                     </div>
                 </div>

                 <div className="tip-porcentage">
                     <label htmlFor="custom">Selecione a Porcentagem % </label>
                     <div>
                        <input type="button" value="5%" />
                        <input type="button" value="10%" />
                        <input type="button" value="15%" />
                        <input type="button" value="20%" />
                        <input type="button" value="50%" />

                        <input type="number" id="custom" placeholder="Outra" />
                     </div>

                     <div className="people">
                        <label htmlFor="people-number">Número De Pessoas</label>
                        <div className="input-box">
                            <input type="number" id="people-number" placeholder="0" />
                        </div>
                     </div>
                 </div>

            </form>

            <section className="results">
                <div className="tip-amount">
                    <p>
                       Gorjeta <br />
                       <span>/ pessoa</span>
                    </p>

                    <p>R$ 0.00</p>
                </div>

                <div className="total">
                    <p>
                        Total <br />
                        <span>/ pessoa</span>
                    </p>

                    <p>R$ 0.00</p>
                </div>

                <button>Limpar</button>
            </section>
        </main>
    )
}