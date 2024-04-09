const cities = [
    { id: 1, title: 'London' },
    { id: 2, title: 'Paris' },
    { id: 3, title: 'Sydney' },
    { id: 4, title: 'Berlin' },
    { id: 5, title: 'Tokyo' },
];

const TopComponent = () => {
    return (
        <div className='flex justify-around items-center my-6'>
            {cities.map((city) => (
                <button key={city.id} className='text-white text-lg font-medium'>
                    {city.title}
                </button>
            ))}
        </div>
    );
};

export default TopComponent;
