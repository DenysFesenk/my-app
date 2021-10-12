import Appinfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../empoloyers-list/empoloyers-list';
import EmployersAddForm from '../empoloyers-add-form/empoloyers-add-form';

import './app.css'


function App() {

    const data = [
        {name: 'Denys F.', salary: 800, increase: true},
        {name: 'Vitaly H.', salary: 2000, increase: false},
        {name: 'John S.', salary: 4000, increase: false},
        {name: 'Tim C.', salary: 8000, increase: false},
    ];

    return (
        <div className="app">
            <Appinfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployersList data={data} />
            <EmployersAddForm />
        </div>
    );
}

export default App;