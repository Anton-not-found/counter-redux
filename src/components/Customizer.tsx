import React from 'react';
import {StartInput} from "./StartInput";
import s from './Customizer.module.css';
import {SuperButton} from "./SuperButton";
import {MaxInput} from "./MaxInput";


type CustomizerPropsType = {
    callbackStart:(newStartValue:number)=>void
    callbackMax:(newMaxValue:number)=>void
    callbackClick:()=>void
}
export const Customizer = (props: CustomizerPropsType) => {


    return (
        <div className={s.customizer}>
            <div className={s.customizerInput}>
                <div className={s.inputItem}>
                    <MaxInput callback={props.callbackMax}/>
                </div>
                <div className={s.inputItem}>
                    <StartInput callback={props.callbackStart}/>

                </div>
            </div>
            <div className={s.customizerButton}>
                <SuperButton title={'S E T'} callback={props.callbackClick} />
            </div>
        </div>
    );
};

