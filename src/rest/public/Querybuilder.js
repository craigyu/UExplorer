import * as React from "react";
import * as ReactDOM from "react-dom";
import QueryBuilder from 'react-querybuilder';

export const fields = [
    {name: 'firstName', label: 'First Name'},
    {name: 'lastName', label: 'Last Name'},
    {name: 'age', label: 'Age'},
    {name: 'address', label: 'Address'},
    {name: 'phone', label: 'Phone'},
    {name: 'email', label: 'Email'},
    {name: 'twitter', label: 'Twitter'},
    {name: 'isDev', label: 'Is a Developer?', value: false},
];

export const combinators = [
    {name: 'WHERE', label: 'Where'},
    {name: 'OPTIONS', label: 'Options'},
    {name: 'TRANSFORMATION', label: 'Transformation'},
]
export const operators = [
    {name: 'AND', label: 'And'},
    {name: 'OR', label: 'Or'},
    {name: 'IS', label: 'is'},
    {name: 'GT', label: '>'},
    {name: 'LT', label: '<'},
    {name: 'EQ', label: '='},
]

export class Query extends React.Component{
    constructor() {
        super();
        this.state = {
            query: {}
        };
    }

    render() {
        let controlElements = {
            valueEditor: this.customValueEditor()
        }
        return (
            <div className="flex-box" style ={{float:"left", border:0, margin: 0}}>
                <div className="scroll" style ={{float:"left", border:150, margin:30}}>
                    <QueryBuilder fields={this.props.fields}
                                  combinators={this.props.combinators}
                                  operators={this.props.operators}
                                  controlElements={controlElements}
                                  controlClassnames={{fields: 'form-control'}}
                                  onQueryChange={this.logQuery.bind(this)}/>
                </div>
                <div className="shrink query-log scroll" style ={{backgroundColor: "#CCCCCC", float:"right" }}>
                    <h4>Your Input Query</h4>
                    <pre>{JSON.stringify(this.state.query, null, 2)}</pre>
                </div>
            </div>
        );
    }

    customValueEditor() {
        let checkbox = class MyCheckbox extends React.Component {
            constructor(props) {
                super(props);
            }

            render() {
                if (this.props.field !== 'isDev' || this.props.operator !== '=') {
                    return <input type="text" 
                                  value={this.props.value}
                                  onChange={e => this.props.handleOnChange(e.target.value)}/>
                                  
                }

                return (
                    <span>
                        <input type="checkbox"
                               value={!!this.props.value}
                               onChange={e => this.props.handleOnChange(e.target.checked)}/>
                    </span>
                );
            }
        };
        return checkbox;
    }
    logQuery(query) {
        this.setState({query});
    }

}

