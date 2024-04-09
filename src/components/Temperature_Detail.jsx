import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faTemperatureHalf, faWind } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons/faDroplet';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const Temperature_Detail = () => {
    return (
        <div>
            <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
                <p>Cloudy or whatever</p>
            </div>
            <div className='flex flex-row items-center justify-between text-white py-3'>
                <img className='w-20' src='https://openweathermap.org/img/wn/01d@2x.png' alt='' />
                <p className='text-5xl'>34°</p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex items-center justify-between font-light text-sm'>
                        <FontAwesomeIcon icon={faTemperatureHalf} size='lg' className='mr-1' />
                        Real Feel:
                        <span className='font-medium ml-1'>32°</span>
                    </div>
                    <div className='flex items-center justify-between font-light text-sm'>
                        <FontAwesomeIcon icon={faDroplet} size='lg' className='mr-2' />
                        Humidity:
                        <span className='font-medium ml-1'>43%</span>
                    </div>
                    <div className='flex items-center justify-between font-light text-sm'>
                        <FontAwesomeIcon icon={faWind} size='lg' className='mr-1' />
                        Wind:
                        <span className='font-medium ml-1'>3 km/h</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-row items-center justify-center text-sm py-3 text-white space-x-2'>
                {/* sun rise */}
                <FontAwesomeIcon icon={faSun} />
                <p className='font-light'>
                    Rise: <span className='font-medium ml-1'>06:16 AM</span>
                </p>
                <p className='font-light'>|</p>

                {/* sun set */}
                <FontAwesomeIcon icon={faMoon} />
                <p className='font-light'>
                    Set: <span className='font-medium ml-1'>06:16 AM</span>
                </p>
                <p className='font-light'>|</p>

                {/* highest */}
                <FontAwesomeIcon icon={faArrowUp} />
                <p className='font-light'>
                    High: <span className='font-medium ml-1'>32°</span>
                </p>
                <p className='font-light'>|</p>

                {/* lowest */}
                <FontAwesomeIcon icon={faArrowDown} />
                <p className='font-light'>
                    Low: <span className='font-medium ml-1'>11°</span>
                </p>
            </div>
        </div>
    );
};

export default Temperature_Detail;
