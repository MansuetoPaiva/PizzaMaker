<<<<<<< HEAD
<<<<<<< HEAD
/**
 * @typedef {import('../state').State['molho']} Molho
 *
 *
 * @param {{onMolho: (s: Molho) => void}} param0
 * @returns
 */
export function OpcoesMolho({ onMolho }) {
  
  const handleChange = ({target: {value}}) => {
    onMolho(value);
  }  

  return (
    <section>
      <h2>Molho:</h2>
      <ul>
        <Opcao id="5" value="vermelho" onChange={handleChange} />
        <Opcao id="4" value="amarelo" onChange={handleChange} />
      </ul>
    </section>
  );
}

/**
 * 
 * @param {{id: string, value: 'vermelho'|'amarelo', onChange}} props
 */
function Opcao({ id, value, onChange }) {
  const url = `https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-0${id}.png?t=1670932317000`;

  return (
    <li>
      <input
        onChange={onChange}
        type="radio"
        id={"radio" + value}
        name="molho"
        value={value}
      />
=======
export function OpcoesMolho() {
=======
export function OpcoesMolho({onMolho}) {
>>>>>>> 911a77e (alteraçoes)
    return (
      <section>
        <h2>Molho:</h2>
        <ul>
          <Opcao onCheck={() => onMolho('vermelho')} id="5" value="vermelho"/>
          <Opcao onCheck={() => onMolho('amarelo')} id="4" value="amarelo"/>
        </ul>
      </section>
    );
  }
  
  
  function Opcao({id, value, onCheck}){
    const url = `https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-0${id}.png?t=1670932317000`
    
    return (
      <li>
<<<<<<< HEAD
      <input type="radio" id={"radio" + value} name="molho" value={value} />
>>>>>>> 9f0f9db (modificaçoes)
=======
      <input 
      type="radio" 
      id={"radio" + value} 
      name="molho" 
      value={value} 
      onClick={onCheck}/>
>>>>>>> 911a77e (alteraçoes)
      <label htmlFor={"radio" + value}>
        <img className="img-icon" src={url} alt={"molho " + value} />
      </label>
    </li>
<<<<<<< HEAD
  );
}
=======
    )
  }
>>>>>>> 9f0f9db (modificaçoes)
