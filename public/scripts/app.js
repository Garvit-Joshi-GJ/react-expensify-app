'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handelDeleteOptions = _this.handelDeleteOptions.bind(_this);
        _this.handelAddOption = _this.handelAddOption.bind(_this);
        _this.handelPick = _this.handelPick.bind(_this);
        _this.handelDeleteOptionSingular = _this.handelDeleteOptionSingular.bind(_this);
        _this.state = {
            options: _this.props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('componentDidMount');
            try {
                var options = JSON.parse(localStorage.getItem('options'));
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                alert('bad data in Local storage');
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProp, prevState) {
            if (prevState.options.length != this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
            console.log('saving data');
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount');
        }
        // handel delete options

    }, {
        key: 'handelDeleteOptions',
        value: function handelDeleteOptions() {
            this.setState(function () {
                return { options: []
                };
            });
        }
    }, {
        key: 'handelDeleteOptionSingular',
        value: function handelDeleteOptionSingular(optionToRem) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRem != option;
                    })
                };
            });
        }
    }, {
        key: 'handelAddOption',
        value: function handelAddOption(option) {
            if (!option) {
                return 'Enter valid Value  to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'handelPick',
        value: function handelPick() {
            var randNum = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randNum]);
        }
    }, {
        key: 'render',
        value: function render() {

            var subtitle = 'Put your life in the hands of computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handelPick: this.handelPick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handelDeleteOptions: this.handelDeleteOptions,
                    handelDeleteOptionSingular: this.handelDeleteOptionSingular
                }),
                React.createElement(AddOptions, { handelAddOption: this.handelAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};
var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};
Header.defaultProps = {
    title: 'Indecision'
};
var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handelPick,
                disabled: !props.hasOptions },
            'What should i do'
        )
    );
};
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handelDeleteOptions },
            'Remove All'
        ),
        !props.options.length > 0 && React.createElement(
            'p',
            null,
            'No Options added YET!! '
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option,
                optionText: option,
                handelDeleteOptionSingular: props.handelDeleteOptionSingular });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.handelDeleteOptionSingular(props.optionText);
                }
            },
            'Delete'
        )
    );
};

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.handelAddOption = _this2.handelAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOptions, [{
        key: 'handelAddOption',
        value: function handelAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handelAddOption(option);
            this.setState(function () {
                return {
                    error: error //error:error  
                };
            });
            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handelAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Options'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

// const jsx=(
//         <div>
//            <IndecisionApp />
//         </div>
// );
// const User = (props)=>{
//     return(
//         <div>
//         <p>Name: {props.name}</p>
//         <p>Age:</p>
//         </div>
//     )
// };

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
