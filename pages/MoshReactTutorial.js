// Importing React so can reference Babel can Compile it to modern Javascript
import React, {useState} from 'react'; 
import ReactDOM from 'react-dom';
import Counters from '@/components/counter';

// On react developer tools, you can interact with an instance of that component using $r.
// You can also interact with HTMLTag of an element using $0.

// Props is read only 

// Lifting the state Up, Making Stateless Functional Components, Shortcut for Stateless Functional Components

// 3 lifecycle phase
// 1. Mounting phase - render, componentDidMount, constructor
// 2. Update phase - render, componentDidUpdate
// 3. Unmount - componentWillUnmount



// 1. Render - represents virtual DOM to be insterted as actual DOM
// 2. Constructor - initiate base properties of component
// 3. ComponentDidMount - For AJAX calls, after that setState
// 4. ComponentDidUnmount - When the component is deleted from the DOM. For cleanup to avoid memory leaks

export default function MoshReactTutorial() {
    const [counters, setCounters] = useState([
        {id: 1,value: 0},
        {id: 2,value: 0},
        {id: 3,value: 0},
        {id: 4,value: 0},
    ])

    const [initialState] = useState([
        {id: 1,value: 0},
        {id: 2,value: 0},
        {id: 3,value: 0},
        {id: 4,value: 0},
    ])

    const handleIncrement = counter => {
        const counteres = [...counters];
        const index = counteres.indexOf(counter);
        counteres[index] = {...counter};
        counteres[index].value++;
        setCounters(counteres)
    }

    const handleDelete = id => {
        setCounters(counters.filter(i => i.id !== id ))
    }

    const handleReset = () => {
        // const counteres = counters.map(counter => {
        //     counter.value = 0;
        //     return counter
        // });
        // setCounters(counteres)
        setCounters(initialState)
    }

   return (
       <div>
           <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <span className="badge badge-pill badge-secondary">
                    {counters.filter(c => c.value > 0).length}
                </span>
            </nav>
           <button onClick={handleReset}
                style={{fontSize: 20}} className="btn btn-primary btn-sm"
            >
                Reset
            </button>
        {counters.map((counter,index) => 
            <Counters key={index} 
                value={counter.value}
                handleIncrement={handleIncrement}
                id={counter.id}
                onDelete={handleDelete}
                counter={counter}
            >
            </Counters>
        )}
       </div>
   )
}
