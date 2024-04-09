import Time_Location from './Time_Location';
import { Forecast, InputComponent, Temperature_Detail, TopComponent } from './components/exportComponents';

const App = () => {
    return (
        <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
            <TopComponent />
            <InputComponent />

            <Time_Location />
            <Temperature_Detail />
            <Forecast />
        </div>
    );
};

export default App;
