import React from 'react'

function Result({meanings, word, LightTheme, category}) {

  return (
    <div className='bg-[#56473d]'>
    {word ? 
    (meanings.map((mean)=>
        mean.meanings.map((item)=>
            item.definitions.map((def)=>(
              <div
                className="px-20 py-8 border-y-2"
                style={{
                  backgroundColor: LightTheme ? "#56473d" : "#fff",
                  color: LightTheme ? "#fff" : "#6c584c",
                  bordercolor: LightTheme ? "#fff" : "#6c584c"
                }}
              >
                <b>{def.definition}</b>
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}<br/>
                  </span>
                )}
              </div>
            ))
        )
    )) :
    <></>
    }
    </div>
  )
}

export default Result