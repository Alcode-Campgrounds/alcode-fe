import { stateData } from './stateData.js';

export default function States({state, setState}){
    return (
        <select defaultValue='ALL' onChange={({target}) => setState(target.value)}>
            <option key='ALL' value='ALL'>ALL</option>
         {stateData.map(state => (
             <option key={state.abbrev} value={state.abbrev}>{state.state}</option>
         ))}   
        </select>
    )
}