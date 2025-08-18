import React, { useEffect } from 'react'

function useTitle(title) {

    useEffect(()=>{
        document.title = `${title} - CodeBook`
    },[title])

  return null
}

export default useTitle