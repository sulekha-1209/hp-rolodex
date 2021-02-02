import './card-list.styles.css'
import {Card} from './../card/card.component'

export const CardList = (props) => {
console.log(props);
return <div className="card-list">
    {props.characters.map(character => <Card key={character.name} character={character}></Card>)}
</div>

}