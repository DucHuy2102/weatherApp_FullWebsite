import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';

const InputComponent = () => {
    return (
        <div className='flex flex-row justify-center my-6'>
            {/* left input */}
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input
                    type='text'
                    placeholder='Search here...'
                    className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder: lowercase'
                />
                <SearchOutlined className='text-white text-xl cursor-pointer transition ease-out hover:scale-125' />
                <EnvironmentOutlined className='text-white text-xl  cursor-pointer transition ease-out hover:scale-125' />
            </div>

            {/* right input */}
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name='metric' className='text-xl text-white font-light'>
                    ℃
                </button>
                <p className='text-xl text-white mx-1'>|</p>
                <button name='imperial' className='text-xl text-white font-light'>
                    ℉
                </button>
            </div>
        </div>
    );
};

export default InputComponent;
