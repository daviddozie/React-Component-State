import Header from "../../Header/Header"

export default function HomePage() {
    return (
        <div className='w-[95%] md:w-[90%] lg:w-[80%] mx-auto'>
            <Header
                fTitle={"Food"}
                lTitle={"Bag"}
                homeLabel={"Home"}
            />
            <h1 className="text-[50px] font-[900] text-center text-white">HomePage</h1>
        </div>
    )
}