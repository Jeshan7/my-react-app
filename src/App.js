import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
    state = {
      person: [
        {id: 1, name: "Jeshan", age: 23},
        {id: 2, name: "Anuj", age: 12},
        {id: 3, name: "Jak", age: 71}
      ]            
    }

    switchNameHandler = (newName) => {
      this.setState({
        person: [
          {name: newName, age: 23},
          {name: "Anuj", age: 2},
          {name: "Ashish", age: 1}
        ],
        showPersons: false
      }) 
    }

    changeNameHandler = (event, id) => {
      const personIndex = this.state.person.findIndex(p => {
        return p.id === id;                                            
      })   
     
      // const persons = this.state.person[personIndex];
      const person = {
        ...this.state.person[personIndex]
      }

      person.name = event.target.value;

      const persons = [...this.state.person];
      person[personIndex] = person;

      this.setState({person: person}) 
    }

    deleteNameHandler = (personIndex) => {
      const persons = this.state.person;
      persons.splice(personIndex, 1);
      this.setState({
        person: persons
      })
    }


    showPersonHandler = () => {
      const status = this.state.showPersons;
      this.setState({
        showPersons: !status
      })
    }

    render() {
      const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid #eee',
        padding: '9px',
        cursor: 'pointer',
        // ':hover': {
        //   backgroundColor: '#eee',
        //   color: 'black'
        // }
      }
      
      let persons = null;

      let btnClasses = '';

      if(this.state.showPersons){
        persons = (
          <div>
            {this.state.person.map((person, index) => {
               return <Person
                       click={() => this.deleteNameHandler(index)}
                       name={person.name}
                       age={person.age} 
                       key = {person.id}
                       changedName = {(event) => this.changeNameHandler(event, person.id)}
                      />
             })
            }
          </div>
        )
        btnClasses = classes.Red;
        // style[':hover'] = {
        //   backgroundColor: 'red',
        //   color: 'black'
        // }
      }
              
      let assignedClasses = [];

      if(this.state.person.length <= 2){
        assignedClasses.push(classes.red);
      }

      if(this.state.person.length <= 1){
        assignedClasses.pop(classes.red);
        assignedClasses.push(classes.bold);
        
      }

      return (
        // <StyleRoot>
        <div className={classes.App}>
          <h1 className = {assignedClasses.join(' ')}>Hi, I'm Jeshan</h1>
          <button className = {btnClasses} 
                  onClick = {this.showPersonHandler}>Switch Names</button>
          {persons}
        </div>
        // </StyleRoot>
      );
    //return React.createElement('div', {className: 'App'}, React.createElement( 'h1', null, 'I\'m Jeshan')); 
    }
}

export default App;