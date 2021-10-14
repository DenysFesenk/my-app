import {Component} from 'react'

import Appinfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../empoloyers-list/empoloyers-list';
import EmployersAddForm from '../empoloyers-add-form/empoloyers-add-form';

import './app.css'


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Denys F.', salary: 800, increase: false, rise: false, id:1},
                {name: 'Vitaly H.', salary: 2000, increase: false, rise: false, id:2},
                {name: 'John S.', salary: 4000, increase: false, rise: false, id:3},
                {name: 'Tim C.', salary: 8000, increase: false, rise: false, id:4},
            ]
        }
    }


    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary, 
            increase: false,
            rise: false,
            id: this.maxId++ 
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render(){
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <Appinfo employees={employees}
                        increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployersList 
                    data={this.state.data} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />

                <EmployersAddForm onAdd={this.addItem} />
            </div>
        );
    }    
}

export default App;