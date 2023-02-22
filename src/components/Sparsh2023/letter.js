import { useEffect, useRef, useState } from 'react'
import './letter.css'

const Letter=(props)=>{
    
    console.log(props.alphbet);
    // const [border,setBorder]=useState('red');

    const [shadow,setShadow]=useState(`0px 0px 3px 3px ${props.shadow}`);

    const flash=()=>{
        setShadow(`0px 0px 6px 6px ${props.shadow}`)
    }

    const flashOver=()=>{
        setShadow(`0px 0px 3px 3px ${props.shadow}`)
    }

    const useSetState = (initialState = []) => {
        const [state, setState] = useState(new Set(initialState));
        const add = (item) => setState(state => new Set(state.add(item)));
        const remove = (item) => setState(state => {
            state.delete(item);
            return new Set(state);
        });
        return { set: state, add, remove, has: char => state.has(char) };
    }

    const useSound = (url) => {
        const sound = useRef(new Audio(url));
        return { 
          play: () => sound.current.play(), 
          stop: () => {
            sound.current.pause();
            sound.current.currentTime = 0;
          }
        }
    };

    const { play, stop } = useSound('https://cdn.yoavik.com/codepen/mechanical-keyboard/keytype.mp3');
  
    // const { add, remove, has } = useSetState([]);
    
    const { add, remove, has } = useSetState([]);

    useEffect(() => {
        document.addEventListener('keydown', e => e.key===props.alphbet ?  clearTimeout([play(),flash(),console.log(e.key)],500)  : null);
        document.addEventListener('keyup',  e => e.key===props.alphbet ?  [flashOver()]  : null);
    }, []);

    // const keys = (chars: string[], spans: boolean[] = []) => chars.map((char, i) => (
    //     <Key key={char} char={char} span={spans[i] || false} active={has(char)}/>
    // ));

  
    return(
        <div  tabIndex="0"  className="letter" style={
            
            {
                boxShadow:shadow,
                
            }
        }>
            {props.alphbet}
        </div>
    )

}

export default Letter