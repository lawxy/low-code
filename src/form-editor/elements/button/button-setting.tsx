import React from 'react'
import { observer } from "mobx-react-lite";
import { CommonTabsSetting } from '@/components/common-tabs-setting';
import { SettingItem } from '@/components/setting-item';

const SettingButtonContent = () => {
  return (
    <div>
      {/* <BasicInfo /> */}
      <CommonTabsSetting 
        // attributes
      />
    </div>
  )
}
export const SettingButton = observer(SettingButtonContent)