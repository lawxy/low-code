import React from 'react'
import { observer } from "mobx-react-lite";
import BasicInfo from '../../components/basic-info';

const SettingRadioContent = () => {
  return (
    <div>
      <BasicInfo />
    </div>
  )
}
export const SettingRadio = observer(SettingRadioContent)