import Header from "../../Header/Header"

export default function LoginPage() {
    return (
        <div className='w-[95%] md:w-[90%] lg:w-[80%] mx-auto'>
            <Header
                fTitle={"Food"}
                lTitle={"Bag"}
                homeLabel={"Login"}
            />
            <h1 className="text-[50px] font-[900] text-center text-white">LoginPage</h1>
        </div>
    )
}