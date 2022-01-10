import React from 'react';

class Widget extends React.Component {
  componentDidMount() {
    window.SEC.ready(function () {
      var widget = window.SEC.widget("example-widget");
      widget.config({
          code: {
              compiler: 28,
              source: "#!/bin/bash\n\necho test",
              input: "",
          },
          compilers: {
              list: [11, 21, 28, 33]
          }
      });
    });
  }

  componentWillUnmount() {
    window.SEC.ready(function () {
      var widget = window.SEC.widget("example-widget");
      widget.destroy();
    });
  }

  render() {
    return (
      <div style={{'width': '700px', 'height': '500px'}}>
        <div className="sec-widget" data-id="example-widget" data-widget="9e1e25c224b32a941cccc468d284e148"></div>
      </div>
    );
  }
}

export default Widget;
