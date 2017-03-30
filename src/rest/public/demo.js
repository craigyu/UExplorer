import * as React from "react";

let getValue = "";

class QueryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "empty",
            toRender: ["AND"]
        };

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }


    handleSubmit(e) {
        this.setState({toRender: this.state.toRender.concat([this.state.value])});
        e.preventDefault();
    }

    handleRender(render) {
        if(render == "empty") {
            return (
                <div>
                    <label>
                        Pick Next Filter:
                    </label>
                    <select value = {this.state.value} onChange={this.handleChange}>
                        <option value = "IS">IS</option>
                        <option value = "GT">GT </option>
                    </select>
                </div>
            )
        }
        if(render == "AND") {
           return(
               <div>
               <label>
                Pick Root Filter:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option ></option>
                    <option value="empty">NONE</option>
                    <option value="AND">AND</option>
                    <option value="OR">OR</option>
                </select>
            </label>
           <input type="submit" value="Submit" />
               </div>
        )}

        if(render == "IS") {
            return (
                <div>
                    <label>
                        Pick String Filter
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value=""></option>
                            <option value="dept">DEPT</option>
                        </select>
                    </label>
                </div>
            )
        }

        if(render == "dept") {
            return (
                <h1>DONE</h1>
            )
        }
    }

    render() {
        const toRender = this.state.toRender.map((render) =>
        <form onSubmit = {this.handleSubmit}>
            {this.handleRender(render)}
        </form>
        );
        return (
            <div>
                {toRender}
            </div>

        )
    }




}

function getV() {
    return getValue
}

class AndForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: "AND"}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.target.value})
        getValue = this.state.value;
    }


    handleSubmit(e) {
        getValue = this.state.value;
        alert(this.state.value)
        e.preventDefault()
    }

    render(){
        return (
            <div>
                <label>
                    Pick Root Filter:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option ></option>
                        <option value="empty">NONE</option>
                        <option value="AND">AND</option>
                        <option value="OR">OR</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </div>

        )
    }
}

class IsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: "IS"}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleSubmit(e) {
        getValue = this.state.value;
        e.preventDefault()
    }

    render(){
        return (
            <div>
                <label>
                    Pick String Filter
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value=""></option>
                        <option value="dept">DEPT</option>
                    </select>
                    <input type="submit" value="Submit" />
                </label>
            </div>

        )
    }
}

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "AND",
            isRendered: ["AND"]
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e) {
        this.setState({isRendered: this.state.isRendered.concat([this.state.value])});
        e.preventDefault();
    }




    handleRender(render) {
        this.state.value = render;
        if(render == "AND") {
            return (
                <AndForm />
            )
        }

        if(render == "IS") {
            return (
                <IsForm />
            )
        }

        if(render == "dept") {
            return (
                <h1>DONE</h1>
            )
        }
    }




    render() {
        const toRender = this.state.isRendered.map((render) =>
            <form onSubmit = {this.handleSubmit}>
                {this.handleRender(render)}
            </form>
        );
        return (
            <div>
                {toRender}
            </div>

        )
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);

