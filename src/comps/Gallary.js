import GComp from "./gComp"
import './Gallary.css'
const Gallary=()=>{

    const styles=[
        {
            height:'229px',
            width:'229px',
            margin:'10px 10px',
            margin2:'10px 10px'
        },
        {
            height:'200px',
            width:'200px',
            margin:'132px 35px 40px 54px',
            margin2:'55px 55px'
        },
        {
            height:'100px',
            width:'100px',
            margin:'26px 30px',
            margin2:'26px 30px'
        },
        {
            height:'200px',
            width:'200px',
            margin:'25px 0px',
            margin2:'26px 0px'
            // margin:'0px'
        },
        {
            height:'200px',
            width:'200px',
            margin:'46px -41px 1px 7px',
            margin2:'-52px 33px'
        },
        {
            height:'350px',
            width:'300px',
            margin:'50px -138px -4px 136px',
            margin2:'0px'
        },
        {
            height:'100px',
            width:'100px',
            margin:'-98px 83px',
            margin2:'29px'
        },
        {
            height:'230px',
            width:'230px',
            margin:'-99px -35px',
            margin2:'20px'
        },
        {
            height:'100px',
            width:'100px',
            margin:'-94px 459px 0px 10%',
            margin2:'11px 0px 0px 52%'
        },
        {
            height:'153px',
            width:'160px',
            margin:'-148px 30px',
            margin2:'37px'
        }

    ]
    return(
        <div className="gallary" >
            <GComp styles={styles[0]}/>
            <GComp styles={styles[1]}/>
            <GComp styles={styles[2]} />
            <GComp styles={styles[3]}/>
            <GComp styles={styles[4]}/>
            <GComp styles={styles[5]}/>
            <GComp styles={styles[6]}/>
            <GComp styles={styles[7]}/>
            <GComp styles={styles[8]}/>
            <GComp styles={styles[9]}/>
        </div>
    )
}

export default Gallary