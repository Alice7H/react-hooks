import React from 'react'; // {useReducer}
import './App.css';
// import Repositories from './components/hook-components/hookState/Repositories';
// import RepoFavorite from './components/hook-components/hookEffect/RepoFavorite';
// import Localization from './components/hook-components/hookEffect/Localization';
// import ClassCounter from './components/class-components/ClassCounter';
// import HookCounter from './components/hook-components/hookState/HookCounter';
// import HookCounter2 from './components/hook-components/hookState/HookCounter2';
// import ClassCounter2 from './components/class-components/ClassCounter2';
// import HookCounter3 from './components/hook-components/hookState/HookCounter3';
// import HookCounter4 from './components/hook-components/hookState/HookCounter4';
// import ClassCounter3 from './components/class-components/ClassCounter3';
// import HookCounter5 from './components/hook-components/hookEffect/HookCounter5';
// import ClassMouse from './components/class-components/ClassMouse';
// import HookMouse from './components/hook-components/hookEffect/HookMouse';
// import MouseContainer from './components/hook-components/hookEffect/MouseContainer';
// import IntervalClassCounter from './components/class-components/IntervalClassCounter';
// import IntervalHookCounter from './components/hook-components/hookEffect/IntervalHookCounter';
// import DataFetching from './components/hook-components/hookEffect/DataFetching';
// import ComponentA from './components/hook-components/hookContext/ComponentA';
// import ReducerOne from './components/hook-components/hookReducer/ReducerOne';
// import ReducerTwo from './components/hook-components/hookReducer/ReducerTwo';
// import ReducerThree from './components/hook-components/hookReducer/ReducerThree';
// import CompA from './components/hook-components/hook-context-reducer/CompA';
// import CompB from './components/hook-components/hook-context-reducer/CompB';
// import CompC from './components/hook-components/hook-context-reducer/CompC';

// import DataFetchingOne from './components/hook-components/hookEffect/DataFetchingOne'; 
// import DataFetchingTwo from './components/hook-components/hookReducer/DataFetchingTwo';
// import ParentComponent from './components/hook-components/hookCallback/ParentComponent';
// import Counter from './components/hook-components/hookMemo/Counter';
// import FocusInput from './components/hook-components/hookRef/FocusInput';
// import ClassTimer from './components/class-components/ClassTimer'; 
// import HookTimer from './components/hook-components/hookRef/HookTimer';
// import DocTitleOne from './components/Custom hook/DocTitleOne';
// import DocTitleTwo from './components/Custom hook/DocTitleTwo';
// import Counter1 from './components/Custom hook/Counter1';
// import Counter2 from './components/Custom hook/Counter2';
import UserForm from './components/Custom hook/UserForm';


// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// useReducer with context
// export const CountContext = React.createContext()
// const initialState = 0
// const reducer = (state, action) => {
//     switch(action){
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialState
//         default: 
//             return state        

//     }
// }

export default function App() {

  // const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
     
      {/* <Repositories></Repositories>
      <RepoFavorite></RepoFavorite> 
      <Localization></Localization>*/}

      {/* useState
       <ClassCounter></ClassCounter> 
       <HookCounter> </HookCounter>
       <ClassCounter2></ClassCounter2>
       <HookCounter2></HookCounter2> 
       <HookCounter3></HookCounter3>
       <HookCounter4></HookCounter4>
      */}

      {/* useEffect 
       <ClassCounter3></ClassCounter3>
       <HookCounter5></HookCounter5>
       <ClassMouse></ClassMouse>
       <HookMouse></HookMouse>
       <MouseContainer></MouseContainer>
       <IntervalClassCounter></IntervalClassCounter>
       <IntervalHookCounter></IntervalHookCounter>
      */}
      {/* Axios installed with command npm install axios
       <DataFetching></DataFetching>
       */}

       {/* useContext */}
       {/* <UserContext.Provider value={'Ana'}>
          <ChannelContext.Provider value={'coder'}>
            <ComponentA/>
          </ChannelContext.Provider>
       </UserContext.Provider> */}

       {/* useReducer */}
       {/* <ReducerOne></ReducerOne> 
        <ReducerTwo></ReducerTwo>*
        <ReducerThree></ReducerThree>*/}

      {/* useReducer with useContext*/}
      {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        Count = {count}
        <CompA></CompA>
        <CompB></CompB>
        <CompC></CompC>
      </CountContext.Provider> */}

      {/* useEffect with axios to compare 
        with useReducer */}
      {/* < DataFetchingOne></DataFetchingOne> */}
    
      {/* useReducer with axios */}
      {/* <DataFetchingTwo></DataFetchingTwo> */}

      {/* useCallback */}
      {/* <ParentComponent/> */}


      {/* useMemo */}
      {/* <Counter></Counter> */}

      {/* useRef */}
      {/* <FocusInput></FocusInput>
      <ClassTimer></ClassTimer>
      <HookTimer></HookTimer> */}

      {/* Custom hooks */}
      {/* the first doc, counter without hooks 
      <DocTitleOne></DocTitleOne>
      <DocTitleTwo></DocTitleTwo> 
      <Counter1></Counter1>
      <Counter2><Counter2>*/}
      <UserForm></UserForm>

    </div>
  );
}