import { useState } from 'react';
import { useEffect } from 'react';
import Images from '../images';

const GComp=(props)=>{

    console.log(props.styles.height);

    const [matches,setMatches]=useState(
        window.matchMedia("(min-width: 1075px)").matches
    )

    useEffect(() => {
        window
        .matchMedia("(min-width: 1075px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

    return(
        <div style={{
            height:props.styles.height,    
            width:props.styles.width,
            // border:"2px solid black",
            margin:matches ? props.styles.margin : props.styles.margin2,

            
            
            
        }
        }>
            <Images/>
        </div>
    )
}

export default GComp