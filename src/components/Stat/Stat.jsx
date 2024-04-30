import CountUp from 'react-countup';
import 'animate.css';

const Stat = ({subCategories}) => {
    
    return (
        <div className="mt-16 mb-12 w-[85%] mx-auto bg-[#DE3626] rounded-xl p-12">
            <h2 className="animate_animated animate__heartBeat text-4xl text-white font-bold text-center mb-12">Purchase Unique Style Paintings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {subCategories.map((item) => (

                    <div className="p-12 border-x-4 flex flex-col items-center" key={item._id}>

                        <p className='text-white font-semibold text-3xl mb-4 text-center'>{item.subcategory_name}s</p>
                        <p className='text-3xl text-[#f0bc5f] font-semibold'><CountUp end={500} />+</p>

                    </div>

                ))}

            </div>
        </div>
    );
};

export default Stat;