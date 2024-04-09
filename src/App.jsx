import { InputComponent, TopComponent } from './components/exportComponents';

const App = () => {
    return (
        <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
            <TopComponent />
            <InputComponent />
        </div>
    );
};

export default App;
