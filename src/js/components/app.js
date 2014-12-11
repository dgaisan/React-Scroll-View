/**
 * Created by Dmitri on 12/11/2014.
 */
var React = require('react');

var ScrollItem = React.createClass({

    render: function() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.thumb} />
            </div>
        );
    }
});

var App = React.createClass({

    getInitialState: function() {
        return {data: getData()};
    },

    render: function() {
        return (
            <div>
                {this.state.data.map(function(item, i) {
                    return (
                        <ScrollItem title={item.title} thumb={item.thumb} key={i}></ScrollItem>
                    );
                })}
            </div>
        );
    }
});

/**
 * Random Data.
 * @returns {{title: string, thumb: string}[]}
 */
function getData() {
    var data = [
        {title: 'Title #1', thumb: 'http://lorempixel.com/g/300/200/'},
        {title: 'Title #2', thumb: 'http://lorempixel.com/300/200/'},
        {title: 'Title #3', thumb: 'http://lorempixel.com/300/200/sports'},
        {title: 'Title #4', thumb: 'http://lorempixel.com/g/300/200/people'},
        {title: 'Title #5', thumb: 'http://lorempixel.com/300/200/fashion'},
        {title: 'Title #6', thumb: 'http://lorempixel.com/g/300/200/cats'},
    ];

    return data;
}

module.exports = App;