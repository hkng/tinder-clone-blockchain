import Header from "../Components/Header"
import Card from "../Components/Card"

const style = {
  wrapper: `h-screen w-screen flex flex-col bg-[#2222229]`,
  cardsContainer: `flex flex-col items-center justify-center`
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.cardsContainer}>
        <Card />
      </div> 
    </div>
  )
}
