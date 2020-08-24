import React, { useEffect, useState } from 'react'
import { View, Text , StyleSheet, ScrollView, FlatList, StatusBar} from 'react-native';
import { connect } from "react-redux";

import {} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../../styles';
import { Stepper } from '../../components/stepper';
import { Step } from '../../components/stepper/step';
import { Upload } from '../../components/stepper/upload/upload';
import { ActionStep } from '../../components/stepper/actionStep/actionStep';
import { ViewActionStep } from '../../components/stepper/viewActionStep/viewActionStep';
import { Download } from '../../components/stepper/download/download';
import { getRoadmaps, getRequest } from '../../store/roadmaps';
import ConnectionControl from '../../components/connectionControl';
import Loader from '../../components/loader';
import { useDispatch, useSelector } from "react-redux";


interface RoadmapsProps {
  [key: string]: any
}

enum ActionType {
  Course,
  Narrative,
  FileActionStep,
  Commitment,
  Url,
  BussinessApplication,
  TakeAProfile,
  AccessFile,
  DownloadTheApp,
  AttendWorkshop,
  CompleteDebrief,
  SubmitWEEvaluations,
  MakeAConnection,
  AttendAdvancedCertificationWorkshop,
  Default,
}

const Roadmaps: React.FC<RoadmapsProps> = (props) => {
  const dispatch = useDispatch()
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    props.getData();
  }, []);

  const renderActionType = (type) => {
      if(type === ActionType.AccessFile) {
        return <Download />
      } else if (type === ActionType.FileActionStep) {
        return <Upload />
      }
      return null;
  }
  
  return (
    <View style={styles.container}>
		<ConnectionControl refresh={props.getData} />	
      {!!props.roadmaps.loading ? (
        <View>
          <Loader />
        </View>
      ) : (
        <View style={styles.container}> 
      {/* // <FlatList
      //   data={data}
      //   renderItem={({ item, index }) => (
      //     <View>
      //       {item.topics.map((v, i) => (
      //         <>
      //           <Text>{v.topicName}</Text>
      //           <Text>{v.topicDescription}</Text>
      //         </>
      //       ))}
      //     </View>
      //   )}
      // /> */}
        {/* <Text style={styles.title}>{props.roadmaps.name}</Text> */}
          <FlatList
            data={props.roadmaps.milestones}
            // renderItem={renderItem}
            keyExtractor={(item, index) => (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
            onRefresh={() => props.getData()}
            refreshing={!!props.roadmaps.loading}
            renderItem={({ item }) => (
              <Stepper>
              <View>
                <Step title={item.name} icon={<Ionicons name={"ios-cube"} color={Colors.WHITE} size={24}/>}>
                  {item.actionSteps.map((x, i) => (
                    <>
                     <ActionStep title={!!x.name ? x.name : x.title} icon={<Ionicons name={"ios-link"} color={Colors.WHITE} size={20}/>}>
                      {renderActionType(x.type) }                      
                    </ActionStep>
                        {/* <Upload />
                        <Download /> */}
              
               

                      {/* <Text>{x.description}</Text> */}
                    </>
                  ))}               
                </Step>
              </View>
      
       
              </Stepper>
            )}
            
          />
      </View>
      )}		
    </View>	
    // <ScrollView>
    //   <View style={styles.container}> 
    //     <Stepper>
    //       <Step title="MOTM - 5 DEC - ALL STEPS" icon={<Ionicons name={"ios-cube"} color={Colors.WHITE} size={24}/>}>
    //         <ActionStep title="Other - 22 Nov" icon={<Ionicons name={"ios-link"} color={Colors.WHITE} size={20}/>}>
    //           <Upload />
    //         </ActionStep>
    //         <ActionStep title="Other - 22 Nov" icon={<Ionicons name={"ios-flag"} color={Colors.WHITE} size={20}/>}>
    //           <Download />
    //         </ActionStep>
    //       </Step>
    //       <Step 
    //       title="MOTM - 5 DEC - ALL STEPS 1" 
    //       icon={<Ionicons name={"ios-eye"} color={Colors.WHITE} size={24}/>}>
    //         <ActionStep title="Other - 22 Nov" icon={<Ionicons name={"ios-flash"} color={Colors.WHITE} size={20}/>}>
    //           <ViewActionStep />
    //         </ActionStep>
    //         <ActionStep title="Other - 22 Nov" icon={<Ionicons name={"ios-flask"} color={Colors.WHITE} size={20}/>}>
    //           <ViewActionStep />
    //         </ActionStep> 
    //         <ActionStep title="Other - 22 Nov" icon={<Ionicons name={"ios-flame"} color={Colors.WHITE} size={20}/>}>
    //           <ViewActionStep />
    //         </ActionStep>
    //         <ActionStep title="Other - 22 Nov" icon={<Ionicons name={"ios-flower"} color={Colors.WHITE} size={20}/>}>
    //           <ViewActionStep />
    //         </ActionStep>   
    //       </Step>
    //       <Step 
    //       title="MOTM - 5 DEC - ALL STEPS 2" 
    //       icon={<Ionicons name={"ios-cut"} color={Colors.WHITE} size={24}/>}
    //       isLast={true}>
    //         <ActionStep title="Other - 22 Nov" icon={<Ionicons name={"ios-exit"} color={Colors.WHITE} size={20}/>}>
    //           <ViewActionStep />
    //         </ActionStep>         
    //       </Step>
    //     </Stepper>
    //   </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    padding: 15,
  },
  // item: {
	// 	backgroundColor: Colors.WHITE,
	// 	borderColor: Colors.GRAY_MEDIUM,
	// 	borderWidth: 1,
	// 	borderRadius: 10,
  //   padding: 15,
  //   marginVertical: 5,
  // },
  // title: {
	// 	fontSize: 16,
	// 	fontWeight: '700'
	// },
	// description: {
	// 	fontSize: 16
	// }
});

const mapStateToProps = (state) => {
	console.log("state.roadmaps.roadmaps", state.roadmaps.roadmaps);
	return {
		roadmaps: state.roadmaps.roadmaps,
		loading: state.loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getData: () => {
			dispatch(getRoadmaps());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Roadmaps);
