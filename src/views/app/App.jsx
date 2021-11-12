import React, { useEffect, useState } from 'react'

import Content from '../content/Content'

const App = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        fetch(`https://covid19-api.com/country/all?format=json`)
            .then((res) => res.json())
            .then((countries) => {

                setLoading(false)
            })
    }, [setLoading])

    return (
        !loading ? (
            < div className="bg-secondary" >
                <Content />
            </div >
        ) : (
            <div>Carregando informações...</div>
        )
    )
}

export default App