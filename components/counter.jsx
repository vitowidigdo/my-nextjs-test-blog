import React,{useState} from 'react'

const element = <h1>Hello World</h1>;

// ReactDOM.render(element, document.getElementById('root'))

// Hot Module Reloading: create-react-app make you not refreshing all the time. Update instantly;
// JSX expression making react element, which is part of Virtual DOM.  
// Virtual DOM: Lightweight in memory representation of UI. If state changes,
// React compare the previous Virtual DOM and change it in the Real DOM
// State special property, object that includes any data that component needs

// Arrow function doesn't bind this, they inherited it.

function Counter(props) {
    const {id, value} = props

    const [componentState, setComponentState] = useState({
        count: value,
        imageUrl: 'https://picsum.photos/200',
        tags: [{value: 'tag1'}, {value: 'tag2'}, {value: 'tag3'}]
    })

    function formantCount() {
        const count = value;
        return count === 0 ? "Zero" : count;
    }

    const getBadgeColorFunction = () => {
        let countClass = "badge m-2 bg-";
        countClass += value === 0 ? "warning" : "primary";
        return countClass;
    }

    // console.log(props)
    return (
        <div>
            {/* <img src={state.imageUrl} /> */}
            {/* <span className="badge badge-primary"></span> */}
            <div className="d-flex align-items-center">
                <span style={{fontSize: 20, }} className={getBadgeColorFunction()}>
                    {formantCount()}
                </span>
                <div className="d-flex justify-content-between" style={{width: '300px'}}>
                    <button onClick={() => props.handleIncrement(props.counter)}
                        style={{fontSize: 20}} className="btn btn-secondary btn-sm">
                        Increment
                    </button>
                    <button onClick={() => props.onDelete(id)}
                        style={{fontSize: 20}} className="btn btn-danger btn-sm">
                        Delete
                    </button>
                </div>
            </div>
            {componentState?.tags === 0 ? <p>There are no Tags</p> :
                <ul>
                    {componentState?.tags?.map((tag,index) => (
                        <li key={index}>{tag.value}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default Counter
