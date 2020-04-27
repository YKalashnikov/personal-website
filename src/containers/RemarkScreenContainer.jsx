import React from 'react';
import { connect } from 'react-redux';
import { toggleRemarkScreen } from '../state/actions'; 
import RemarkScreen from '../components/RemarkScreen';

function RemarkScreenContainer(props) {
  React.useEffect(()=>{
    initializeEscClosing()
  },[])

  const initializeEscClosing=()=> {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (e) => {
        if (props.isActive && e.which == 27) {
          props.toggleScreen();
        } 
      });
    } 
  }
  

    return (
      <div>
        <RemarkScreen
          isActive={props.isActive}
          locationPathName={props.locationPathName}
          onClick={props.toggleScreen}
        />
        {props.isActive && <div 
            onClick={props.toggleScreen}
            className="c-remark-screen-overlay"
          >
          </div>}
      </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  return { isActive: state.remarkScreen.isActive };
}

const mapDispatchToProps = (dispatch) => {
  return { toggleScreen: () => dispatch(toggleRemarkScreen()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(RemarkScreenContainer);
