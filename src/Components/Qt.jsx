
import { quotes } from "./quotes";

const Qt = () =>{
  

    return(
        <div className="Quote_Container">
            {
                quotes.map((qt,index)=>{
                    return(
                        <div className="QUOTES_DIV" key={index}>
                            <p className="quote_text">{qt.quote}</p>
                            <p className="quote_author">{qt.author}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Qt;