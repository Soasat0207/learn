import React ,{component,Fragment} from 'react';

class Clock extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
    }
    // eslint-disable-next-line react/require-render-return
    render() {
        return(
            <Fragment>
                <p>Đồng hồ hiển thị {this.props.time}</p>
            </Fragment>
        )
        
    }
}
export default Clock ;