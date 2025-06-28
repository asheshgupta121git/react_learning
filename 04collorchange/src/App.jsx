

import './App.css'
import ColorPillsBar from './ColorPillsBar'

function App() {
  const colors = [
  { name: 'Red', color: 'bg-red-600 text-black' },
  { name: 'Green', color: 'bg-green-600 text-black' },
  { name: 'Blue', color: 'bg-blue-600 text-black' },
  { name: 'Gray', color: 'bg-gray-500 text-black' },
  { name: 'Yellow', color: 'bg-yellow-400 text-black' },
  { name: 'Pink', color: 'bg-pink-300 text-black' },
  { name: 'Purple', color: 'bg-purple-700 text-black' },
  { name: 'Lavender', color: 'bg-purple-200 text-black' },
  { name: 'White', color: 'bg-white text-black' },
  { name: 'Black', color: 'bg-black text-white' },
];

  return (
    <>
    <ColorPillsBar color={colors}/>
    </>
  )
}
export default App
