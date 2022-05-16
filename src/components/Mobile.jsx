import "./Mobile.css"
export const Mobile=(props)=>{ 
        console.log(props.list);
    return(
        <div>
            <h1>{props.head}</h1>
     <ul>
                {props.list.map((e)=>{ 
                    return(
                    
                        <li key={e.li} className={e.c}>{e.li}</li>
                    
               ) })}
      </ul>
        </div>
    )
}