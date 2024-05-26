import React from 'react'
import { observer } from "mobx-react-lite";
import BasicInfo from '@/components/basic-info';
import OptionSetting from '@/components/option-setting'; 

const SettingRadioContent = () => {
  return (
    <div>
      <BasicInfo />
      <OptionSetting/>
    </div>
  )
}
export const SettingRadio = observer(SettingRadioContent)