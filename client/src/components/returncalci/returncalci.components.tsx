import React from 'react'

const Returncalci = () => {
    const CryptoOptions = [
        {
            logo: 'Polygon',
            rate: '2%'
        },
        {
            logo: 'Alchemy',
            rate: '2%'
        },
        {
            logo: 'Bitcoin',
            rate: '2%'
        },
        {
            logo: 'Solana',
            rate: '2%'
        },
        {
            logo: 'Ethereum',
            rate: '2%'
        },
        {
            logo: 'Binance',
            rate: '2%'
        },
    ]
  
    return (
    <div className="return-calculator">
        <div className="return-left">
            <h1>Returns Calculator</h1>
            <p>You earn secure yields on your crypto, effortlessly on Flint</p>

            <div className="crypto-options">

            </div>

        </div>
        <div className="return-right">
            

        </div>
    </div>
  )
}

export default Returncalci;