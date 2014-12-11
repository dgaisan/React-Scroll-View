/**
 * Created by Dmitri on 12/11/2014.
 */
var React = require('react');

var ScrollItem = React.createClass({
    render: function() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src="{this.props.thumb}" />
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div>
                {this.state.data.map(function(item) {
                    return (
                        <ScrollItem title={item.title} thumb={item.thumb}></ScrollItem>
                    );
                })}
            </div>
        );
    }
});