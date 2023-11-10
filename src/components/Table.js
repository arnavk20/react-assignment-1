import { Component } from "react";
import './style.css'
class Table extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }
    handlechange = (event) => {
        const inputValue = event.target.value;
        this.setState({
        count: inputValue === "" ? 0 : inputValue.split(" ").length
    });
        
    }
    render() {
        return (
            <div className="container">
                <div className="item">
                    <h1>Responsive Paragraph Word Counter</h1>
                </div>
                <div className="item" id="kk2">
                    <textarea onChange={this.handlechange} placeholder="Enter your paragraph here" id="paragraph" spellCheck="true"></textarea>
                </div>
                <div className="item" id="kk">
                    Word Count: {this.state.count}
                </div>
                <div>
                    By : Siddhartha singh negi
                </div>
            </div>
        );
    }
}
export default Table;