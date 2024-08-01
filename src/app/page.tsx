export default function Home() {
  // aqui pega a hora kk
  const fullTime = new Intl.DateTimeFormat('pt-BT', {
    timeStyle: 'short',
    hour12: false
  }).format()

  const hour = new Date().getHours()
  let greeting = ''

  if(hour >= 0 && hour < 12) {
    greeting = 'Bom dia 😀'
  } else if(hour >= 12 && hour < 18) {
    greeting = 'Boa tarde 🤓'
  } else if(hour >= 18 && hour < 23) {
    greeting = 'Boa noite 😴'
  }

  return (
    <div className="items-center flex flex-col justify-center w-screen h-screen text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="text-9xl">{fullTime}</div>
      <div className="text-5xl font-bold">{greeting}</div>
    </div>
  )
}
