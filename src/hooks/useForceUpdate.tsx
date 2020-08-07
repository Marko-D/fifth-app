
import React, { useCallback, useState } from 'react'

interface useForceUpdateProps {
  // [key: string]: any;
}

const useForceUpdate: React.FC<useForceUpdateProps> = ():any => {
    // const [, updateState] = useState();
    // console.log('useForceUpdateuseForceUpdateuseForceUpdate')
    // return useCallback(() => updateState({}), []);
    let [value, setState] = useState(true);
    return () => setState(!value);
}

export default useForceUpdate;