import * as React from 'react';
import {Modal, Button, View} from 'react-native';
import {connect} from 'react-redux';
import Error from './errorModal';
import Success from './successModal';
import { hideModal } from '../../store/modal';
// import { ModalActions } from '../../store/modal';
import { useDispatch, useSelector } from "react-redux";

// import our new actions
const Modals = {
  Error: Error,
  Success: Success,
};

interface RootModalProps {
  id, 
  modalProps, 
  hideModal,
  [key: string]: sny
}


export const RootModal: React.FC<RootModalProps> = ({id, modalProps, hideModal}) => {
debugger
  // const {dal} = props;

  // assign a constant that is either one of our custom views or a noop function if the id is not set
  const ModalView = Modals[id] || function() {};
  const dispatch = useDispatch();
  
  return (
    // show the Modal if the id is set to a truthy value
    // <Modal visible={Boolean(id)} animationType="fade" testID="modal">
    <Modal visible={Boolean(id)} animationType="fade">
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: 'space-between',
        }}>
        {/* inject the custom view */}
        <ModalView {...modalProps} />
        <Button onPress={() => dispatch(hideModal)} title="Close" color="blue" />
      </View>
    </Modal>
  );
  
}

const mapStateToProps = state => {
  return {
    id: state.modal.id,
    modalProps: state.modal.modalProps,
  };
};

// add hideModal action to props
const mapDispatchToProps = {
  hideModal: hideModal,
};

const ConnectedRootModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootModal);

export default ConnectedRootModal;

