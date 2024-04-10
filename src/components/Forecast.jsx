const Forecast = ({ title }) => {
    return (
        <div>
            <div className='flex items-center justify-start my-5'>
                <p className='text-white uppercase font-medium'>{title}</p>
            </div>
            <hr className='my-1' />

            <div className='flex flex-row items-center justify-between text-white'>
                <div className='flex flex-col items-center justify-between'>
                    <p className='font-light text-sm'>4:30 PM</p>
                    <img className='w-12 my-1' src='https://openweathermap.org/img/wn/01d@2x.png' alt='' />
                    <p className='font-medium'>22°</p>
                </div>
                <div className='flex flex-col items-center justify-between'>
                    <p className='font-light text-sm'>4:30 PM</p>
                    <img className='w-12 my-1' src='https://openweathermap.org/img/wn/01d@2x.png' alt='' />
                    <p className='font-medium'>22°</p>
                </div>
                <div className='flex flex-col items-center justify-between'>
                    <p className='font-light text-sm'>4:30 PM</p>
                    <img className='w-12 my-1' src='https://openweathermap.org/img/wn/01d@2x.png' alt='' />
                    <p className='font-medium'>22°</p>
                </div>
                <div className='flex flex-col items-center justify-between'>
                    <p className='font-light text-sm'>4:30 PM</p>
                    <img className='w-12 my-1' src='https://openweathermap.org/img/wn/01d@2x.png' alt='' />
                    <p className='font-medium'>22°</p>
                </div>
                <div className='flex flex-col items-center justify-between'>
                    <p className='font-light text-sm'>4:30 PM</p>
                    <img className='w-12 my-1' src='https://openweathermap.org/img/wn/01d@2x.png' alt='' />
                    <p className='font-medium'>22°</p>
                </div>
            </div>
        </div>
    );
};

export default Forecast;
