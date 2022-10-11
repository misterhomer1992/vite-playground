import React, {Component} from "react";

export function MyDecorator (Component) {
    return class MyDecoratorClass extends React.PureComponent {
        log(message: string) {
            console.log(message);
        }

        render() {
            return (
                <Component
                    {...this.props}
                    log={this.log}
                />
            );
        }
    }
}
