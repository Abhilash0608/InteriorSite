const Hero = () => {
    return (
        <main className="hero_main flex items-center justify-center sm:flex-col xs:flex-col m-auto p-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center sm:max-w-full max-w-[80%]">
                <h1 className="text-black sm:text-black text-white text-[32px] sm:text-[28px] font-bold italic">
                    Welcome to <strong className="text-orange-600 text-[36px] sm:text-[32px]">Dream Space</strong> Interior Design
                </h1>
                <p className="text-gray-700 sm:text-gray-700 text-white max-w-[90%] mt-2 italic leading-6 tracking-wider sm:leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                    a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum.
                </p>
            </div>
        </main>
    )
}
export default Hero