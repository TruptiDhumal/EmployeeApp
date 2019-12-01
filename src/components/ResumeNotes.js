import React from 'react';
import {connect} from 'react-redux';

class ResumeNotes extends React.Component{
    render(){
        const resmObj = this.props.resumelist[0];
        return (
            <div className="tab-content">
                <div className="tab-pane container active" id="home">
                    <p> {resmObj.note}</p>
                </div>
            </div> 
        );
    }
}

const mapStateToProps = (state,ownProps) =>
{
    return {
        resumelist : state.resumelist.filter((emp) => emp.id == ownProps.match.params.id)
        }
}
export default connect(mapStateToProps)(ResumeNotes);
