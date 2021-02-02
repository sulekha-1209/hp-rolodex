import '../card/card.styles.css'

export const Card = (props) => {
    return <div className="card-container">
        <img src={props.character.image} className="card-image" alt="character"/>
        <h2> {props.character.name}</h2>
        {props.character.house && <div> <strong>House :</strong> {props.character.house}</div>}
        {props.character.species && <div><strong>Species : </strong> {props.character.species}</div>}
        {props.character.ancestry &&  <div><strong>Ancestry :</strong> {props.character.ancestry}</div>}
        {props.character.wand && props.character.wand.length && props.character.wand.core && props.character.wand.wood && <div> <strong>Wand :</strong> {props.character.wand.length}' long {props.character.wand.wood} wood with {props.character.wand.core} core </div>}
        {props.character.patronus && <div> <strong>Patronus :</strong> {props.character.patronus}</div>}
    </div>
}