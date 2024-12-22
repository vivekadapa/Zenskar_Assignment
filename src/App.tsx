import Calendar from "./components/Calendar"

function App() {
  
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-[#191919] fixed top-0 w-full text-white px-8 py-3">
         <h1 className="text-2xl font-semibold">Zenskar</h1>
      </div>
      <Calendar />
    </div>
  )
}

export default App
