import React from 'react'
import { observer } from "mobx-react-lite";
import { Select, Input, InputNumber } from 'antd';
import BasicInfo from '../../components/basic-info';
import { SettingItem } from '../../components/setting-item';
import store from '../../store';

const typeOptions = [{label: '单行文本', value: 'single'}, {label: '多行文本', value: 'multiple'}]
const SettingInputContent = () => {
  const { textType, minRows, maxRows } = store.selectedElement
  return (
    <div>
      <BasicInfo />
      <SettingItem label='文本类型'>
        <Select 
          value={textType} 
          style={{width: '100%'}} 
          options={typeOptions}
          onChange={(val) => {
            store.setSelectedProp('textType', val)
          }}
        />
      </SettingItem>
      {
        textType === 'multiple' && (
          <>
            <SettingItem label='最小行数'>
              <InputNumber 
                value={minRows} 
                style={{width: '100%'}} 
                onChange={(val) => {
                  store.setSelectedProp('minRows', Number(val))
                }}
              />
            </SettingItem>
            <SettingItem label='最大行数'>
              <InputNumber 
                value={maxRows} 
                min={minRows}
                style={{width: '100%'}} 
                onChange={(val) => {
                  store.setSelectedProp('maxRows', Number(val))
                }}
              />
            </SettingItem>
          </>
        )
      }
    </div>
  )
}
export const SettingInput = observer(SettingInputContent)