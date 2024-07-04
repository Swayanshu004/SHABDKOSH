import React from 'react'

function Result({meanings, word, LightTheme, category}) {

  return (
    <div className='bg-gray-100'>
    {word ? 
    (meanings.map((mean)=>
        mean.meanings.map((item)=>
            item.definitions.map((def)=>(
              <div
                className="px-10 py-5 border-y-2"
                style={{
                  backgroundColor: LightTheme ? "#6c584c" : "#fff",
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