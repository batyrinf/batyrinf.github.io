import BatyrNuryyew from '../../assets/images/BatyrNuryyew.webp'

const Header: React.FC = () => {
    return (
        <header className="bg-gray-900 text-white p-7 lg:p-16">
            <section className="container mx-auto flex flex-row justify-center lg:justify-start lg:items-start">
                <img className="w-24 lg:w-36" src={BatyrNuryyew} alt="Ezkahan" />

                <main className="flex flex-col ml-5 lg:px-10 lg:ml-7">
                    <aside className="">
                        <h1 className="font-hacker text-3xl lg:text-6xl"> Batyr Nuryyew Haytjanowic </h1>
                        <h3 className="font-hacker absolute text-lg lg:text-2xl bg-gray-700 px-1"> Lecturer </h3>

                        <div className="font-montserrat-medium text-xs lg:text-sm mt-10 lg:mt-16">
                            <p> Email: </p>
                            <small className="text-gray-400"> batyr-info@mail.ru </small>
                        </div>
                    </aside>
                </main>
            </section>
        </header>
    )
}

export default Header