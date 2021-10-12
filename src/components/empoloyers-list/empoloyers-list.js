import EmployersListItem from '../empoloyers-list-item/empoloyers-list-item';

import './employers-list.css';

const EmployersList = ({data}) => {

    const elements = data.map(item => {
        return (
            // <EmployersListItem name={item.name} salary={item.salary}/>
            <EmployersListItem {...item}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;