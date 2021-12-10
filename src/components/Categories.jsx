import React from 'react'

function Categories({items, onClick}) {
    return (
        
            <div class="categories">
            <ul>
              {
                items.map((name, index)=> (<li onClick= {() =>onClick (name)} key={`${name}_${index}`}>{name}</li>))
              }
              
            </ul>
          </div>
        
    )
}



export default Categories
