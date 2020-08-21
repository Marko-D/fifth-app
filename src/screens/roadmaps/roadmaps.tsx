import React from 'react'
import { View, Text , StyleSheet, ScrollView} from 'react-native';

import {} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../../styles';
import { Stepper } from '../../components/stepper';
import { Step } from '../../components/stepper/step';
import { Upload } from '../../components/stepper/upload/upload';
import { ActionStep } from '../../components/stepper/actionStep/actionStep';
import { ViewActionStep } from '../../components/stepper/viewActionStep/viewActionStep';

interface RoadmapsProps {

}

export const Roadmaps: React.FC<RoadmapsProps> = ({}) => {
    return (
      <ScrollView>
        <View style={styles.container}> 
          <Stepper>
            <Step title="MOTM - 5 DEC - ALL STEPS" icon={<Ionicons name={"ios-cube"} color={Colors.WHITE} size={24}/>}>
              <ActionStep title="Other - 22 Nov" icon={<Ionicons name={"ios-link"} color={Colors.WHITE} size={20}/>}>
                <Upload />
              </ActionStep>
              <ActionStep title="Other - 22 Nov" icon={<Ionicons name={"ios-flag"} color={Colors.WHITE} size={20}/>}>
                <ViewActionStep />
              </ActionStep>
            </Step>
            <Step 
            title="MOTM - 5 DEC - ALL STEPS 1" 
            icon={<Ionicons name={"ios-eye"} color={Colors.WHITE} size={24}/>}>
              <ActionStep title="Other - 22 Nov" icon={<Ionicons name={"ios-flash"} color={Colors.WHITE} size={20}/>}>
                <ViewActionStep />
              </ActionStep>
              <ActionStep title="Other - 22 Nov" icon={<Ionicons name={"ios-flask"} color={Colors.WHITE} size={20}/>}>
                <ViewActionStep />
              </ActionStep> 
              <ActionStep title="Other - 22 Nov" icon={<Ionicons name={"ios-flame"} color={Colors.WHITE} size={20}/>}>
                <ViewActionStep />
              </ActionStep>
              <ActionStep title="Other - 22 Nov" icon={<Ionicons name={"ios-flower"} color={Colors.WHITE} size={20}/>}>
                <ViewActionStep />
              </ActionStep>   
            </Step>
            <Step 
            title="MOTM - 5 DEC - ALL STEPS 2" 
            icon={<Ionicons name={"ios-cut"} color={Colors.WHITE} size={24}/>}
            isLast={true}>
              <ActionStep title="Other - 22 Nov" icon={<Ionicons name={"ios-exit"} color={Colors.WHITE} size={20}/>}>
                <ViewActionStep />
              </ActionStep>         
            </Step>
          </Stepper>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    padding: 20
  },
  // stepperContainer: {
  //   backgroundColor: Colors.SECONDARY,
  //   padding: 20
  // },
  // Step: {
  //   backgroundColor: Colors.PRIMARY,
  //   padding: 20
  // },
  // bubble: {
  //   backgroundColor: Colors.SUCCESS,
  //   width: 40,
  //   height: 40,
  //   borderRadius: 20,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   position: "absolute",
  //   top: 10,
  //   left: -20
  // },
  // bubbleTxt: {
  //   color: Colors.WHITE,
  //   fontWeight: '700',
  // }
});