import React, { useState } from 'react'

const Randomcol = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [bgColor, setBgColor] = useState('#000000')

    const RandomNumberGenerator = (length) => {
        return Math.floor(Math.random() * length)
    }

    const randomColorGeneratorHEX = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[RandomNumberGenerator(hex.length)];
            // we are passing the length of the hex array to the function because we want to generate a random number between 0 and the length of the array
        }
        setBgColor(hexColor)
    }
    const randomColorGeneratorRGB = () => {
        const r = RandomNumberGenerator(256);
        const g = RandomNumberGenerator(256);
        const b = RandomNumberGenerator(256);
        const rgb = `rgb(${r},${g},${b})`;
        setBgColor(rgb);
        console.log(rgb)
}
return (
    <div className=' min-w-[100vw] min-h-[100vh] mt-30' style={{ backgroundColor: bgColor }}>
        <div className='flex justify-center text-white min-w-[100vw] gap-5 border-b-1 rounded-2xl p-3'>
            <button className={`cursor-pointer border-1  px-4 py-2 rounded-xl ${typeOfColor === 'hex' ? 'font-bold' : 'font-light'}`} onClick={() => setTypeOfColor('hex')}>Create HEX color</button>
            <button className={`cursor-pointer border-1  px-4 py-2 rounded-xl ${typeOfColor === 'rgb' ? 'font-bold' : 'font-light'}`} onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>

            <button className='cursor-pointer border-1  px-4 py-2 rounded-xl font-bold' onClick={typeOfColor === 'hex' ? (randomColorGeneratorHEX) : (randomColorGeneratorRGB)}>Generate random color     <span>{typeOfColor === '{hex}' ? 'hex':'{rgb}'}</span></button>
        </div>

        <div className='flex items-center justify-center min-h-[100vh] text-3xl md:text-5xl lg:text-7xl font-semibold'>
            <h1>{typeOfColor === 'rgb' ? 'RGB Color: ' : 'HEX Color: '}</h1>
            <h3>{bgColor}</h3>
        </div>
    </div>
)
}

export default Randomcol