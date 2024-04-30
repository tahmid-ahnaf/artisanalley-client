
const Artists = () => {
    return (
        <div className='mx-auto w-[85%] bg-[#FAE9D3] p-8 md:px-8 lg:py-0 rounded-xl'>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

        <div className="hidden lg:flex">
            <img src="https://i.ibb.co/x7249S3/image.png" alt="" className="h-full" />
        </div>
        <div className='col-span-3 lg:col-span-2 items-center grid grid-cols-1 md:grid-cols-4 gap-4'>

        <div className="flex flex-col gap-4">
            <img src="https://i.ibb.co/48T7DBx/image.png" alt="" />
            <p className="text-2xl font-semibold text-center">King Jack</p>
            <p className="text-xl text-center">Natural Artist</p>
        </div>
        <div className="flex flex-col gap-4">
            <img src="https://i.ibb.co/PZSYy7Q/image.png" alt="" />
            <p className="text-2xl font-semibold text-center">Jeni Alice</p>
            <p className="text-xl text-center">Natural Artist</p>
        </div>
        <div className="flex flex-col gap-4">
            <img src="https://i.ibb.co/T4Rnkct/image.png" alt="" />
            <p className="text-2xl font-semibold text-center">Nikola Hellen</p>
            <p className="text-xl text-center">Natural Artist</p>
        </div>
        <div className="flex flex-col gap-4">
            <img src="https://i.ibb.co/0cFkp4L/image.png" alt="" />
            <p className="text-2xl font-semibold text-center">Sisliya Park</p>
            <p className="text-xl text-center">Natural Artist</p>
        </div>


        </div>
             
        </div>
            
        </div>
    );
};

export default Artists;